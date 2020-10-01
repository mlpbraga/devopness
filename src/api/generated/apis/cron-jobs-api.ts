/* eslint-disable */
/**
 * devopness API
 * Devopness API - Painless essential DevOps to everyone 
 *
 * The version of the OpenAPI document: latest
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ApiBaseService } from "../../../services/ApiBaseService";
import { ApiResponse } from "../../../common/ApiResponse";
import { ArgumentNullException } from "../../../common/Exceptions";
import { CronJob } from '../../generated/models';

/**
 * CronJobsApiService - Auto-generated
 */
export class CronJobsApiService extends ApiBaseService {
    /**
     * 
     * @summary Delete a given CronJob
     * @param {number} cronJobId Numeric ID of the cron job to be deleted
     */
    public async deleteCronJob(cronJobId: number): Promise<ApiResponse<void>> {
        if (cronJobId === null || cronJobId === undefined) {
            throw new ArgumentNullException('cronJobId', 'deleteCronJob');
        }
        
        let queryString = '';

        const requestUrl = '/cron-jobs/{cron_job_id}' + (queryString? `?${queryString}` : '');

        const response = await this.delete <void>(requestUrl.replace(`{${"cron_job_id"}}`, encodeURIComponent(String(cronJobId))));
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Get a CronJob by ID
     * @param {number} cronJobId Numeric ID of the cron job to get
     */
    public async getCronJob(cronJobId: number): Promise<ApiResponse<CronJob>> {
        if (cronJobId === null || cronJobId === undefined) {
            throw new ArgumentNullException('cronJobId', 'getCronJob');
        }
        
        let queryString = '';

        const requestUrl = '/cron-jobs/{cron_job_id}' + (queryString? `?${queryString}` : '');

        const response = await this.get <CronJob>(requestUrl.replace(`{${"cron_job_id"}}`, encodeURIComponent(String(cronJobId))));
        return new ApiResponse(response);
    }
}
