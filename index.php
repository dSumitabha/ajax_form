<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css"></link>
    <title>springinfoserve</title>
</head>
<body>
    <div class="container">
        <form method ="POST" id="userForm">
            <select id="state" name="state_id" required >
                <option value="" disabled selected>Select a State</option>
            </select>
            <input type="text" id="name" name="fullname" placeholder="Enter your name" required />
            <input type="number" id="mobile" name="mobile" placeholder="Enter your mobile number" required />
            <input type="text" id="city" name="city" placeholder="Enter your city name" required />
            <input type="submit" value="Submit Form" />
        </form>
        <p id="msgBox" class=""></p>
    </div>

    <div id="userList">
        <button id="fetchBtn">Get User Details</button>
    </div>
    <script src="script.js"></script>
</body>
</html>