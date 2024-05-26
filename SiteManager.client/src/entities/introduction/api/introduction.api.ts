import { GenericResult, SimpleResult } from "../../../shared/types";
import { Introduction } from "../model/indtroduction.model";

const BASE_URL = 'introduction';

export const getIntroductions = async (): Promise<GenericResult<Introduction[]>> => {
    const result: GenericResult<Introduction[]> = new GenericResult<Introduction[]>();

    try {
        const response = await fetch(`/${BASE_URL}/load`);
        const data = await response.json();
        const jData: GenericResult<Introduction[]> = data;
        result.setProperty(jData);
    } catch (error) {
        console.error(error);
    }

    return result;
}

export const updateIntroduction = async (params: UpdateIntroductionParams): Promise<SimpleResult> => {
    const result: SimpleResult = new SimpleResult();

    try {
        const response = await fetch(`/${BASE_URL}/update`, {
            method: 'POST',
            body: JSON.stringify(params),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const data = await response.json();
        const jData: SimpleResult = data;
        result.setProperty(jData);
    } catch (error) {
        console.error(error);
    }

    return result;
}

export type UpdateIntroductionParams = {
    title: string;
    url: string;
}