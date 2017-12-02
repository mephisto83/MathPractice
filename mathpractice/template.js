export default `<!DOCTYPE html>
<html lang="en">

<head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0-alpha2/katex.min.css" integrity="sha384-exe4Ak6B0EoJI0ogGxjJ8rn+RN3ftPnEQrGwX59KTCl5ybGzvHGKjhPKk/KC3abb"
        crossorigin="anonymous">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0-alpha2/katex.min.js" integrity="sha384-OMvkZ24ANLwviZR2lVq8ujbE/bUO8IR1FdBrKLQBI14Gq5Xp/lksIccGkmKL8m+h"
        crossorigin="anonymous"></script>
</head>

<body style="background-color:'red', height: '400px', width: '400px'">
    <div id="element"></div>
    <script>
        var element = document.getElementById('element');
        katex.render("c = \\pm\\sqrt{a^2 + b^2}", element);
    </script>
</body>

</html>`