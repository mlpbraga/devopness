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



/**
 * 
 * @export
 * @interface ResourceEvent
 */
export interface ResourceEvent {
    /**
     * The unique id of the event
     * @type {number}
     * @memberof ResourceEvent
     */
    id: number;
    /**
     * The event type
     * @type {string}
     * @memberof ResourceEvent
     */
    type: string;
    /**
     * The type of the resource that triggered the event
     * @type {string}
     * @memberof ResourceEvent
     */
    resource_type: string;
    /**
     * The id of the resource that triggered the event
     * @type {number}
     * @memberof ResourceEvent
     */
    resource_id: number;
    /**
     * Text describing the event\'s origin and output
     * @type {string}
     * @memberof ResourceEvent
     */
    message?: string | null;
    /**
     * ID of the user who triggered the event
     * @type {number}
     * @memberof ResourceEvent
     */
    triggered_by?: number | null;
    /**
     * The date and time when the record was created
     * @type {string}
     * @memberof ResourceEvent
     */
    created_at: string;
    /**
     * The date and time when the record was last updated
     * @type {string}
     * @memberof ResourceEvent
     */
    updated_at: string;
}

