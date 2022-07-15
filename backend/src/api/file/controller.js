// Helpers
import {
    responseError,
    responseGET,
    responsePOST,
} from "../../helpers/response";

// Service Class
import FileService from "./service";

class FileController extends FileService {
    async getFiles(req, res) {
        try {
            const result = await this.getFilesList();
            const response = responseGET(null, result);
            return res.status(200).json(response);
        } catch (err) {
            const error = responseError([err]);
            res.status(500).json(error);
        }
    }

    async getFile(req, res) {
        try {
            const file = req.query.filename;
            const result = await this.getFileData(file);
            const response = responseGET(null, result);
            if (result.lines.length > 0) {
                return res.status(200).json(response);
            } else {
                const error = responseError({
                    msg: `File ${file} is empty or not found`,
                });
                return res.status(404).json(error);
            }
        } catch (err) {
            const error = responseError([err]);
            res.status(500).json(error);
        }
    }
}

export default FileController;
