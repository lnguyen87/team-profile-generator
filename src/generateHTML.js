
function generateHTML(data) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
          integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
          crossorigin="anonymous"
        />
        <link rel="stylesheet" href="../style.css" />
        <title>team profile generator</title>
    </head>
    <body>
        <header class="jumbotron">
            <h1 class="title">My Team</h1>
        </header>
        <main class="col-12 d-flex flex-column">
            <div class="m-5 row justify-content-around">
                
                <!-- Manager Section -->
                <div class="col-12 col-md-4 col-lg-3 mb-3">
                    <div class="card rounded bg-light">
                      <h4 class="card-header bg-primary text-light position">
                        <p class="name">${data.managerName}</p>
                        <i class="fas fa-mug-hot"></i> Manager
                      </h4>
                      <ul id="list-manager" class="list-group-flush list-unstyled ml-2 mr-2 pt-2 pb-2">
                          <li class="border pl-2 pr-2">ID: ${data.id}</li>
                          <li class="border pl-2 pr-2">Email: <a href="mailto: ${data.email}">${data.email}</a></li>
                          <li class="border pl-2 pr-2">Office #: ${data.office}</li>
                      </ul>
                    </div>
                  </div>
    
            <!-- Engineer Section -->
                <div class="col-12 col-md-4 col-lg-3 mb-3">
                    <div class="card rounded bg-light">
                    <h4 class="card-header bg-primary text-light position">
                        <p class="name">${data.engineerName}</p>
                        <i class="fas fa-glasses"></i> Engineer
                    </h4>
                    <ul id="list-engineer" class="list-group-flush list-unstyled ml-2 mr-2 pt-2 pb-2">
                        <li class="border pl-2 pr-2">ID: ${data.engineerId}</li>
                        <li class="border pl-2 pr-2">Email: <a href="mailto: ${data.engineerEmail}">${data.engineerEmail}</a></li>
                        <li class="border pl-2 pr-2">gitHub: <a href="https://www.github.com/${data.github}" target="_blank">https://www.github.com/${data.github}</a></li>
                    </ul>
                    </div>
                </div>
    
            <!-- Intern Section -->
                <div class="col-12 col-md-4 col-lg-3 mb-3">
                    <div class="card rounded bg-light">
                    <h4 class="card-header bg-primary text-light position">
                        <p class="name">${data.internName}</p>
                        <i class="fas fa-user-graduate"></i> Intern
                    </h4>
                    <ul id="list-intern" class="list-group-flush list-unstyled ml-2 mr-2 pt-2 pb-2">
                        <li class="border pl-2 pr-2">ID: ${data.internId}</li>
                        <li class="border pl-2 pr-2">Email: <a href="mailto: ${data.internEmail}">${data.internEmail}</a></li>
                        <li class="border pl-2 pr-2">School: ${data.school}</li>
                    </ul>
                    </div>
                </div>
            </div>
        </main>
        
    
        <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
        <script src="./assets/javascript/index.js"></script>
    </body>
    </html>`
}

module.exports = generateHTML;