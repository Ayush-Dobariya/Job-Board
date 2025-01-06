document.getElementById('job-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const jobTitle = document.getElementById('job-title').value;
    const jobCompany = document.getElementById('job-company').value;
    const jobLocation = document.getElementById('job-location').value;

    // Create job listing
    const jobListing = document.createElement('li');
    jobListing.textContent = `${jobTitle} at ${jobCompany} - ${jobLocation}`;

    // Append job listing to job list
    document.getElementById('jobs').appendChild(jobListing);

    // Clear form
    document.getElementById('job-form').reset();
});
