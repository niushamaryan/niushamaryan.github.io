*{
margin:0;
padding:0;
box-sizing:border-box;
scroll-behavior:smooth;
}

body{
font-family:'Poppins',sans-serif;
background:#09090b;
color:#fff;
overflow-x:hidden;
}

.bg{
position:fixed;
width:500px;
height:500px;
background:#5f7cff55;
filter:blur(170px);
top:-200px;
left:-100px;
z-index:-1;
}

header{
display:flex;
justify-content:space-between;
align-items:center;
padding:20px;
position:sticky;
top:0;
background:#09090be0;
backdrop-filter:blur(20px);
}

.logo{
font-size:24px;
font-weight:700;
color:#73a5ff;
}

nav{
display:flex;
gap:20px;
}

nav a{
text-decoration:none;
color:#fff;
font-size:15px;
transition:.3s;
}

nav a:hover{
color:#73a5ff;
}

.hero{
padding:120px 20px 80px;
text-align:center;
}

.hero h1{
font-size:32px;
}

.hero h2{
font-size:48px;
color:#73a5ff;
margin:10px 0;
}

.hero h3{
font-weight:400;
margin-bottom:20px;
}

.hero p{
max-width:600px;
margin:auto;
line-height:1.8;
color:#ccc;
}

.btn{
display:inline-block;
margin-top:30px;
padding:15px 35px;
background:#73a5ff;
color:white;
text-decoration:none;
border-radius:50px;
transition:.3s;
}

.btn:hover{
transform:translateY(-5px);
}

section{
padding:80px 20px;
}

section h2{
text-align:center;
margin-bottom:40px;
font-size:32px;
}

.cards{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(180px,1fr));
gap:20px;
}

.card,
.project{
background:#18181b;
padding:30px;
border-radius:20px;
text-align:center;
transition:.4s;
}

.card:hover,
.project:hover{
transform:translateY(-10px);
background:#232327;
}

.card h3,
.project h3{
margin-top:15px;
}

.contact{
text-align:center;
font-size:18px;
line-height:2.5;
}

.contact a{
color:#73a5ff;
text-decoration:none;
}

footer{
text-align:center;
padding:30px;
color:#777;
}

@media(max-width:768px){

header{
flex-direction:column;
gap:15px;
}

nav{
flex-wrap:wrap;
justify-content:center;
}

.hero h2{
font-size:36px;
}

.hero h1{
font-size:26px;
}

section{
padding:60px 15px;
}

}
