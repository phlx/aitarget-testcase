<?php

namespace App\Controller;

use App\Service\FacebookService;
use FacebookAds\Http\Exception\RequestException;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class LimitController
{
    /** @var FacebookService */
    protected $facebookService;

    /**
     * MyController constructor.
     * @param FacebookService $facebookService
     */
    public function __construct(FacebookService $facebookService)
    {
        $this->facebookService = $facebookService;
    }

    /**
     * @Route("/limit", name="get_limit", methods={"GET"})
     *
     * @return JsonResponse
     */
    public function getLimit(): JsonResponse
    {
        $data = [
            'limit' => $this->facebookService->getLimit()
        ];

        return new JsonResponse(compact('data'));
    }

    /**
     * @Route("/limit", name="post_limit", methods={"POST"})
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function postLimit(Request $request): JsonResponse
    {
        $json = $request->getContent();
        $input = json_decode($json, true);
        $data = $input['data'] ?? null;
        if (!$data) {
            return new JsonResponse(['error' => 'Request does not contains "data"'], Response::HTTP_BAD_REQUEST);
        }
        if (!array_key_exists('limit', $data)) {
            return new JsonResponse(['error' => 'Data does not contains "limit" key'], Response::HTTP_BAD_REQUEST);
        }
        $limit = $data['limit'];
        if (!is_numeric($limit)) {
            return new JsonResponse(['error' => 'Limit value must be numeric'], Response::HTTP_BAD_REQUEST);
        }
        if ($limit < 0) {
            return new JsonResponse(['error' => 'Limit value must be a positive number'], Response::HTTP_BAD_REQUEST);
        }
        $value = (float) $limit;
        try {
            $this->facebookService->setLimit($value);
        } catch (RequestException $exception) {
            return new JsonResponse(['error' => $exception->getMessage()], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
        $actual = $this->facebookService->getLimit();
        $data = ['success' => true, 'limit' => $actual];
        return new JsonResponse(compact('data'));
    }
}
