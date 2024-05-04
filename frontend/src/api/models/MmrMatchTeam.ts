/* tslint:disable */
/* eslint-disable */
/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface MmrMatchTeam
 */
export interface MmrMatchTeam {
    /**
     * 
     * @type {string}
     * @memberof MmrMatchTeam
     */
    member1?: string;
    /**
     * 
     * @type {string}
     * @memberof MmrMatchTeam
     */
    member2?: string;
    /**
     * 
     * @type {number}
     * @memberof MmrMatchTeam
     */
    score?: number;
}

/**
 * Check if a given object implements the MmrMatchTeam interface.
 */
export function instanceOfMmrMatchTeam(value: object): boolean {
    return true;
}

export function MmrMatchTeamFromJSON(json: any): MmrMatchTeam {
    return MmrMatchTeamFromJSONTyped(json, false);
}

export function MmrMatchTeamFromJSONTyped(json: any, ignoreDiscriminator: boolean): MmrMatchTeam {
    if (json == null) {
        return json;
    }
    return {
        
        'member1': json['member1'] == null ? undefined : json['member1'],
        'member2': json['member2'] == null ? undefined : json['member2'],
        'score': json['score'] == null ? undefined : json['score'],
    };
}

export function MmrMatchTeamToJSON(value?: MmrMatchTeam | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'member1': value['member1'],
        'member2': value['member2'],
        'score': value['score'],
    };
}

