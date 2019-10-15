<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!--  <link rel="stylesheet" href="../dist/spectre.css">
        <link rel="stylesheet" href="../dist/spectre.min.css"> -->
    <link rel="stylesheet" href="../css/bootstrap.css">
    <!-- <link rel="stylesheet" href="../css/bootstrap.min.css"> -->
    <!-- <script src="../js/jquery.min.js"></script>
        <script src="../js/bootstrap.min.js"></script>         -->
    <link rel="stylesheet" href="mystyle.css" />
    <title>CheckIn CheckOut</title>
</head>

<body>
    <header>
        <div class="navbar navbar-expand-sm bg-dark navbar-dark">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link active" href="#">CheckIn CheckOut</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">About Us</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#">Contact Us</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled move" href="#">Register</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled move" href="#">LogIn</a>
                </li>
            </ul>
        </div>
        </div>
    </header>
    <div class="container">
        <div class="row">
            <div class="col-md-12 seen">
                <h1>Introduction Section</h1>
            </div>
            <div class="col-md-6 shadow">
                <h3 class="text-center text-success">LogIn
                </h3>
                <form action="/action_page.php">
                    <div class="form-group">
                        <label for="uname">Username:</label>
                        <input type="text" class="form-control" id="uname" placeholder="Enter username"
                            name="uname">
                    </div>
                    <div class="form-group">
                        <label for="pwd">Password:</label>
                        <input type="password" class="form-control" id="pwd" placeholder="Enter password"
                            name="pswd" required>
                    </div>
                    <div class="form-group form-check">
                        <label class="form-check-label">
                            <input class="form-check-input" type="checkbox">LogIn as an Administrator
                        </label>
                    </div>

                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
            <div class="col-md-6 shadow">
                <h3 class="text-center text-success">Registration Page</h3>
                <form action="/action_page.php">
                    <div class="form-group">
                        <label for="uname">FIrst Name:</label>
                        <input type="text" class="form-control" id="uname" placeholder="Enter username"
                            name="uname">
                    </div>
                    <div class="form-group">
                        <label for="uname">FIrst Name:</label>
                        <input type="text" class="form-control" id="uname" placeholder="Enter username"
                            name="uname">
                    </div>
                    <div class="form-group">
                        <label for="uname">FIrst Name:</label>
                        <input type="text" class="form-control" id="uname" placeholder="Enter username"
                            name="uname">
                    </div>
                    <div class="form-group">
                        <label for="uname">FIrst Name:</label>
                        <input type="text" class="form-control" id="uname" placeholder="Enter username"
                            name="uname">
                    </div>
                    <div class="form-group">
                        <label for="pwd">Password:</label>
                        <input type="password" class="form-control" id="pwd" placeholder="Enter password"
                            name="pswd" required>
                    </div>
                    <div class="form-group form-check">
                        <label class="form-check-label">
                            <input class="form-check-input" type="checkbox">Register as an Administrator
                        </label>
                    </div>

                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>
    <footer class="seen">
        <img src="./icon/twit.png" class="img-change" />
        <img src="./icon/whatsapp.png" class="img-change" />
        <img src="./icon/instagram.png" class="img-change" />
        <img src="./icon/facebook.png" class="img-change" />
        <img src="./icon/youtube.png" class="img-change" />
    </footer>
</body>

</html>
