let notaDada = 200;

if(notaDada >= 100){
    process.exit("Erro");
} else if(notaDada >= 90){
    process.stdout.write("nota A");
} else if(notaDada >= 80){
    process.stdout.write("nota B");
} else if(notaDada >= 70){
    process.stdout.write("nota C");
} else if(notaDada >= 60){
    process.stdout.write("nota D");
} else if(notaDada >= 50){
    process.stdout.write("nota E");
} else if(notaDada < 50 && notaDada > 0){
    process.stdout.write("nota F");
} else if(notaDada <= 0){
    process.exit("Erro");
}