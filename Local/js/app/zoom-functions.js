const axios = require('axios')
const jwt = require('jsonwebtoken')

const getHeaders = (token) => {
    return {
                'User-Agent': 'Zoom-Jwt-Request',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
}

const generateToken = () => {
    //usar token do plugin jwt (nao usar o token do plugin oauth)
    const APIKey = "ED49Z8CvSryJKgH4XeCe9A";
    const APISecret = "oDEIs0CNQzJEJx6jgB9GZkGUea61U8ZHCOfj";

    const payload = {iss: APIKey,
                    exp: ((new Date()).getTime() + 900000)};

    return jwt.sign(payload, APISecret);
}

const getMyUserInfo = async (token) => {
    return await axios.get('https://api.zoom.us/v2/users?status=active', {
                    headers: getHeaders(token),
                    data: {}
                });
}

const getMyUser = async (token) => {
    const myUserDataResponse = await getMyUserInfo(token);
    const myUser = myUserDataResponse.data.users[0];
    return myUser;
}

const createMeeting = async (userId, token) => {
    return await axios.post(`https://api.zoom.us/v2/${userId}/meetings`, {
        headers: getHeaders(token),
        data: {}
    });
}

(async () => {
    const token = generateToken();
    const myUser = await getMyUser(token);
    const meeting = await createMeeting(myUser.id ,token);
    console.log(meeting);
})()