import { RequestHandler } from "express";
import { AnyObject, ObjectSchema } from "yup";
type TProperty = "body" | "header" | "params" | "query";
type TGetSchema = <T extends AnyObject>(schema: ObjectSchema<any>) => ObjectSchema<any>;
type TAllSchemas = Record<TProperty, ObjectSchema<any>>;
type TGetAllSchemas = (getSchema: TGetSchema) => Partial<TAllSchemas>;
type TValidation = (getAllSchemas: TGetAllSchemas) => RequestHandler;
export declare const validation: TValidation;
export {};
//# sourceMappingURL=Validation.d.ts.map