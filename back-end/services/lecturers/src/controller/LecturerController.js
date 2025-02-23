const { HTTP_STATUS_CODE, apiSuccessResponse, apiErrorResponse } = require('../utils/apiResponse');

class LecturerController
{
    static async index(req, res)
    {
        try
        {
            const lecturers = await Lecturer.findAll();
            const responseMessage = lecturers.length > 0 ? 'Successfully fetch lecturer\'s data' : 'No lecturer\'s data found';

            return apiSuccessResponse(res, responseMessage, lecturers);
        }
        catch(e)
        {
            return apiErrorResponse(res, e.message);
        }
    }

    static async create(req, res)
    {
        try
        {
            const { fullname, age } = req.body;
            if(!fullname || !age)
                return apiErrorResponse(res, 'Invalid request payload', HTTP_STATUS_CODE['Bad Request']);

            const newLecturer = Lecturer.create(req.body);
            return apiSuccessResponse(res, 'A new lecturer successfully registered', newLecturer);
        }
        catch(e)
        {
            return apiErrorResponse(res, e.message);
        }
    }
}

module.exports = LecturerController;