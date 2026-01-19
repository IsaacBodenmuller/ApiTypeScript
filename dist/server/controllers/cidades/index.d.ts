import * as getAll from "./GetAll";
import * as create from "./Create";
import * as getById from "./GetById";
import * as deleteById from "./DeleteById";
import * as updateById from "./UpdateById";
export declare const CidadesController: {
    deleteByIdValidation: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
    deleteById: (req: import("express").Request<deleteById.IParamProps>, res: import("express").Response) => Promise<import("express").Response<any, Record<string, any>>>;
    updateByIdValidation: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
    updateById: (req: import("express").Request<updateById.IParamProps, {}, updateById.IBodyProps>, res: import("express").Response) => Promise<import("express").Response<any, Record<string, any>>>;
    getByIdValidation: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
    getById: (req: import("express").Request<getById.IParamProps>, res: import("express").Response) => Promise<import("express").Response<any, Record<string, any>>>;
    getAllValidation: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
    getAll: (req: import("express").Request<{}, {}, {}, getAll.IQueryProps>, res: import("express").Response) => Promise<import("express").Response<any, Record<string, any>>>;
    createValidation: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
    create: (req: import("express").Request<{}, {}, create.ICidade>, res: import("express").Response) => Promise<import("express").Response<any, Record<string, any>>>;
};
//# sourceMappingURL=index.d.ts.map