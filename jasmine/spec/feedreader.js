/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function () {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('URL defined and it is not empty', () => {
            for (let feeds = 0; feeds < allFeeds.length; feeds++) {
                expect(allFeeds[feeds].url).toBeDefined();
                expect(allFeeds[feeds].url.length).not.toBe(0);
            }
            //This method is making sure all of the url of allFeeds are defined and are filled.


        })
        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

        it('name defined and it is not empty', () => {
            for (let feeds = 0; feeds < allFeeds.length; feeds++) {
                expect(allFeeds[feeds].name).toBeDefined();
                expect(allFeeds[feeds].name.length).not.toBe(0);
            }
            //This method is making sure all of the name of allFeeds are defined and are filled.

        })
        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
    });


    describe('The menu', () => {
        it('the menu element is hidden by default', () => {
            expect(document.querySelector('body').classList.value).toBeTruthy();
        });
        it('the menu changes visibility when the menu icon is clicked', () => {
            let button = document.querySelector('.menu-icon-link');
            button.click();
            expect(document.querySelector('body').classList.contains('menu-hidden')).toBeFalsy(); 
            //This method is how to show this menu.
            button.click();
            expect(document.querySelector('body').classList.contains('menu-hidden')).toBeTruthy(); 
            //This method is how to hide this menu.

        })
    })
    /* TODO: Write a new test suite named "The menu" */

    /* TODO: Write a test that ensures the menu element is
     * hidden by default. You'll have to analyze the HTML and
     * the CSS to determine how we're performing the
     * hiding/showing of the menu element.
     */

    /* TODO: Write a test that ensures the menu changes
     * visibility when the menu icon is clicked. This test
     * should have two expectations: does the menu display when
     * clicked and does it hide when clicked again.
     */
    describe('Initial Entries', () => {
        beforeEach((done) => {
            loadFeed(1, () => {
                done();
            })

        })
        //This method indicates that the loadFeed() has invoked successfully.
        it('there is at least a single .entry element within the .feed container when the loadFeed function is called and completes its work', (done) => {
            expect(document.getElementsByClassName('.feed', '.entry').length).not.toBe('');
            done();
        })
    })
    /* TODO: Write a new test suite named "Initial Entries" */

    /* TODO: Write a test that ensures when the loadFeed
     * function is called and completes its work, there is at least
     * a single .entry element within the .feed container.
     * Remember, loadFeed() is asynchronous so this test will require
     * the use of Jasmine's beforeEach and asynchronous done() function.
     */
    describe('New Feed Selection', () => {
        let oldTextContent;
        beforeEach((done) => {
            loadFeed(2, () => {
                let oldTextContent = document.querySelector('.feed').innerHTML;
            })
            loadFeed(3, () => {
                done();
            })

        })//Variable content changes and via this function.
        it('the content actually changes when a new feed is loaded by the loadFeed function', () => {
            let newTextContent = document.querySelector('.feed').innerHTML;
            expect(newTextContent).not.toBe(oldTextContent);
        })
        
        
    })

    /* TODO: Write a new test suite named "New Feed Selection" */

    /* TODO: Write a test that ensures when a new feed is loaded
     * by the loadFeed function that the content actually changes.
     * Remember, loadFeed() is asynchronous.
     */
}());