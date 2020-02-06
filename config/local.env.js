'use strict';

module.exports = {

    secrets: {
        session: "tem-chat-secure"
    },

    db:{
        URI: 'mongodb://localhost:27017/tem_chat'
    },

    mailer:{
        auth:{
            user: 'ttsprodeveloper@gmail.com',
            pass: 'tts@1234'
        }
    }
}