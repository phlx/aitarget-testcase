<?php /** @noinspection PhpRedundantCatchClauseInspection */

namespace App\Service;


use FacebookAds\Api;
use FacebookAds\Http\Exception\RequestException;
use FacebookAds\Object\AdAccount;
use FacebookAds\Object\Fields\AdAccountFields;

class FacebookService
{
    /** @var Api|null Facebook API instance */
    protected $api;

    /** @var AdAccount Facebook Ad Account */
    protected $account;

    public function __construct()
    {
        $appId = getenv('FACEBOOK_APP_ID');
        $appSecret = getenv('FACEBOOK_APP_SECRET');
        $accessToken = getenv('FACEBOOK_ACCESS_TOKEN');
        // Initialize a new Session and instantiate an Api object
        Api::init($appId, $appSecret, $accessToken);
        $this->api = Api::instance();

        $adAccountId = getenv('FACEBOOK_AD_ACCOUNT_ID');
        $this->account = new AdAccount("act_{$adAccountId}");
    }

    /**
     * @param array $fields
     * @return array
     */
    public function getFields(array $fields): array
    {
        $this->account->read($fields);

        $attributes = [];

        foreach ($fields as $field) {
            $attributes[$field] = $this->account->{$field};
        }

        return $attributes;
    }

    /**
     * @param array $fields
     * @return FacebookService
     * @throws RequestException
     */
    public function setFields(array $fields): self
    {
        try {
            $this->account->update($fields);
        } catch (RequestException $exception) {
            throw $exception;
        }

        return $this;
    }

    /**
     * The total amount that this account can spend, after which all campaigns will be paused, based on amount_spent.
     * A value of 0 signifies no spending-cap and setting a new spend cap only applies to spend AFTER the time
     * at which you set it. Value specified in standard denomination of the currency, e.g. 23.50 for USD $23.50.
     * (Value specified in basic unit of the currency, e.g. cents for USD.)
     *
     * @return int cents
     */
    public function getSpendCap(): int
    {
        $field = AdAccountFields::SPEND_CAP;
        $attributes = $this->getFields([$field]);
        return (int) $attributes[$field];
    }

    /**
     * @param $value
     * @return $this
     * @throws RequestException
     */
    public function setSpendCap(float $value): self
    {
        return $this->setFields([AdAccountFields::SPEND_CAP => $value]);
    }

    /**
     * Current total amount spent by the account. This can be reset
     *
     * @return float
     */
    public function getAmountSpent(): float
    {
        $field = AdAccountFields::AMOUNT_SPENT;
        $attributes = $this->getFields([$field]);
        return (float) $attributes[$field];
    }

    /**
     * limit = spend_cap + amount_spent
     * @return float
     */
    public function getLimit(): float
    {
        $spendCap = $this->getSpendCap();
        $amountSpent = $this->getAmountSpent();
        return round($spendCap / 100, 2) - $amountSpent;
    }

    /**
     * @param float $limit
     * @return $this
     * @throws RequestException
     */
    public function setLimit(float $limit): self
    {
        $spendCap = $limit - $this->getAmountSpent();
        return $this->setSpendCap($spendCap);
    }
}
