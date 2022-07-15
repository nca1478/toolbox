// Dependencies
import axios from "axios";

// Axios Config
import { fileconfig, filesConfig } from "../../config/axios";

class FileService {
    async getFilesList() {
        const responseFiles = await axios(
            filesConfig("https://echo-serv.tbxnet.com/v1/secret/files")
        )
            .then(function (response) {
                return response.data;
            })
            .catch(function (error) {
                return error;
            });

        return responseFiles;
    }

    async getFileData(file) {
        const dataArray = [];
        const tempArray = [];
        const responseArray = [];
        const responseFile = await axios(
            fileconfig(`https://echo-serv.tbxnet.com/v1/secret/file/${file}`)
        )
            .then(function (response) {
                return JSON.stringify(response.data);
            })
            .catch(function (error) {
                return "";
            });

        if (responseFile.substring(1, 5) === "file") {
            dataArray.push(responseFile.split(/\r\\n|\r|\\n/, -1));
        }

        for (let i = 0; i < dataArray.length; i++) {
            for (const j of dataArray[i]) {
                tempArray.push(j.split(","));
            }
        }

        for (let i = 1; i < tempArray.length; i++) {
            if (tempArray[i].length === 4) {
                const array = tempArray[i];

                responseArray.push({
                    text: array[1],
                    number: array[2],
                    hex: array[3],
                });
            }
        }

        return { file, lines: responseArray };
    }
}

export default FileService;
