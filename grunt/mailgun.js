module.exports = {
    marketingTemplates: {
        options: {
        key: '<%= secrets.mailgun.api_key %>',
        domain: '<%= secrets.mailgun.domain %>',
        sender: '<%= secrets.mailgun.sender %>',
        recipient: '<%= secrets.mailgun.recipient %>',
        subject: 'This is a test email'
        },
        src: ['templates/marketing/*.html']
    }
};
