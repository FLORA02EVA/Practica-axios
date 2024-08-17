const  express = require ("express");
const cors = require ("cors");

const PORT = process.env.PORT || 3000;

const app =  express();
app.use(express.json());
app.use(cors());

app.listen(PORT, () =>{
    console.log(`Listening on $PORT${PORT}`);
});


app.get ("/mascotas", (req,res) =>{
    const beneficios = [
        {Beneficios: 'de tener una mascota en el hogar es positivo ya que promueve la convivencia y reduce el riesgo de ansiedad y depresión. La actividad física que se realiza al pasear a una mascota ayuda a disminuir la posibilidad de sobrepeso, obesidad, hipertensión y diabetes, de acuerdo con datos de los Servicios de Salud Mental de la Secretaría de Salud.        No sólo eso, cuando los adolescentes tienen una mascota, los vuelve más sociables, les enseña a administrar el tiempo, mejoran su autoestima y les da sentido de responsabilidad. Si adquieres o adoptas a una mascota, considera que debe haber espacio y se le debe brindar los cuidados necesarios, atención y alimentación, además de vacunas y visitas periódicas al veterinario.'}
    ];
        res.send (beneficios); 
    });

app.get ("/mascotas/favoritas", (req,res) =>{
    const nombres = [
        {Name: "Pelusa", Age:"5", Especie:"Gato", Raza: "Angora"},
        {Name: "Duquesa", Age:"8", Especie:"perro", Raza: "Pastor Aleman"},
        {Name: "Gigante", Age:"2", Especie:"hamnster", Raza: "desconocido"},
    ];
        res.send (nombres); 
    });


