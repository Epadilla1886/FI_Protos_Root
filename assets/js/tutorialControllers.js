//Tutorial Controllers File

app.controller('dtMobileViewController', function(){
    this.title = "Dev Tools - Mobile View";

    this.topics = {
        'Using dev tools to test mobile view and functionality': {
            html: "<ul class='left-border'><li class='clean-list'><h4>We will be using the <a href='http://learningfuze.com' target='_blank'>learningfuze.com</a> website for this example</h4><ol><li>Open <a href='http://learningfuze.com' target='_blank'>learningfuze.com</a> in your browser</li><li>Open the inspector</li><li>Look for the phone icon <img src='assets/images/tutorials/dev-tools-mobile-view/phoneIcon.png' alt='Phone Icon' style='display: inline-block; height: 1em; margin: 3px' /> (right next to the elements tab) as illustrated below</li></ol><img src='assets/images/tutorials/dev-tools-mobile-view/1.png' alt='If you see this contact an instructor (dev tool mobile view img 1)' /></li><li class='clean-list'><h4>Once in the mobile dev tools view</h4><ol><li>In the upper left corner click on the <span class='label label-default'>Device</span> dropdown as illustrated below</li><li>Locate the <span class='label label-info'>Apple iPhone 6</span> option and select it<ul><li><b>NOTE:</b> Do <b>NOT</b> select the <span class='label label-danger'>Apple iPhone 6 Plus</span> option</li></ul></li></ol><img src='assets/images/tutorials/dev-tools-mobile-view/2.png' alt='If you see this contact an instructor (dev tool mobile view img 2)' /><ol start='3'><li>Look for the phone icon again</li><li>If the phone icon has a yellow caution sign, reload the page, because the view is not an accurate representation yet</li></ol><img src='assets/images/tutorials/dev-tools-mobile-view/3.png' alt='If you see this contact an instructor (dev tool mobile view img 3)' /><ol start='5'>   <li>After the page refreshes, notice the difference in the look of <a href='http://learningfuze.com' target='_blank'>learningfuze.com</a></li></ol><img src='assets/images/tutorials/dev-tools-mobile-view/4.png' alt='If you see this contact an instructor (dev tool mobile view img 4)' /></li></ul>"
        }
    }
});
