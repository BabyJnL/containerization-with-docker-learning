const Course = require('../model/Course');
const { HTTP_STATUS_CODE, apiSuccessResponse, apiErrorResponse } = require('../utils/apiResponse');

class CourseController
{
    static async index(req, res)
    {
        try
        {
            const courses = Course.findAll();
            const apiMessage = courses.length > 0 ? 'Successfully fetch courses data' : 'No courses data found';

            return apiSuccessResponse(res, apiMessage, courses);
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
            const { lecturerId, name, description } = req.body;
            if(!lecturerId || !name || !description)
                return apiErrorResponse(res, 'Invalid request payload');
            
            const course = Course.create(req.body);
            return apiSuccessResponse(res, 'A new course created', course, HTTP_STATUS_CODE.Created);
        }
        catch(e)
        {
            return apiErrorResponse(res, e.message);
        }
    }
}

module.exports = CourseController;