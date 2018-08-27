module.exports = {
    marketingTemplates: {
        options: {
        key: 'key-yourmailgunapikey',
        domain: 'example.com',
        sender: 'noreply@example.com',
        recipient: 'recipient@example.com',
        subject: 'This is a test email'
        },
        src: ['templates/marketing/*.html']
    }
};


