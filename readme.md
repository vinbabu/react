# Checkbox functionality to post the checkbox data to anoter page using React, Redux and Hooks

- This is a simple benefit selection application Using React, Redux and Hooks

- Data fetching from benefits.json to render the list of benefit packages (Basic, Additional ...), their respective categories (Health, Travel, ...) and the respective benefits (Actual, Accrued...) under each category.

- Review selection button will be disabled to begin with unless the user selects at least one package by checking 'include' and at least one benefit for any category in that package.

- Upon clicking Review selection, route should change to '/review'. Note that you need to add react-router dependency for the same and configure routes.

- On the Review page, user should see their selections that they did on the selection page. (Review page is also currently hardcoded and will need to render info as selected)

- Back button on review should bring user back to selection page

- Note: In App.js, BenefitReview component is included.

# Instructions

- Do not modify benefits.json
- Redux/hooks is optional but nice to have
- Good luck!
