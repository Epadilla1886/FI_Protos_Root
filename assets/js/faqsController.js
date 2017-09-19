app.controller('faqsController', function() {
    this.title = "Course Faqs";
    this.faqList = [
        {
            question: 'When are assignments due?',
            answer: 'All Prototypes & Skill Assessments are due at 10pm. Prototypes are due 2 buisness days after they are assigned in the portal. Projects are due at the end of the week they are assigned. All Skill Assessments are due the day they are assigned.'
        },
        {
            question: 'When are instructors available to answer questions?',
            answer: 'instructors are available Monday through Thursday nights from 7 - 9 pm., or during business hours via slack (Current Full Immersion students take priority)'
        },
        {
            question: 'When can I expect feedback on my assignment?',
            answer: 'Feedback will usually be given within 72 hours of submission. You may not recieve feedback on all assignments however all students will recieve feedback on key assignments.'
        }
    ]
});
