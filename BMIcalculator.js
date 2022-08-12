const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({extended:true}))

app.get('/',function(req, res){
    res.sendFile(__dirname + "/index.html")
})

app.post('/',function(req,res){
    var weight = parseFloat(req.body.weight)
    var height = parseFloat(req.body.height)/100
    var BMI = weight / Math.pow(height,2)
    res.send("your BMI is" +" "+ BMI+
    "<br> <br>check your health status <br> <br><table><tbody><tr><th>BMI</th><th>BMI Category</th></tr><tr><td>Less than 15</td><td>Very severely underweight</td></tr><tr><td>Between 15 and 16</td><td>Severely underweight</td></tr><tr><td>Between 16 and 18.5</td><td>Underweight</td></tr><tr><td>Between 18.5 and 25</td><td>Normal (healthy weight)</td></tr><tr><td>Between 25 and 30</td><td>Overweight</td></tr><tr><td>Between 30 and 35</td><td>Moderately obese</td></tr><tr><td>Between 35 and 40</td><td>Severely obese</td></tr><tr><td>Over 40</td><td>Very severely obese</td></tr></tbody></table>")
})

app.listen(process.env.PORT || 745,function(){
    console.log("sever is running on port 745")
})