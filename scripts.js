var serieId = "5920";
var temporadaSelect = document.getElementById('temporada');
var listaCapitulos = document.getElementById('lista-capitulos');
var tempTitulo = document.getElementById('temp-titulo');
var btnFavorito = document.querySelector('button[aria-label="Favorito"]');
var iconoCorazon = btnFavorito.querySelector('i');
var iframePrincipal = document.getElementById('iframe-principal');

var serieActual = {
  id: serieId,
  titulo: "El Mentalista",
  temporada: temporadaSelect.value,
  poster: "https://image.tmdb.org/t/p/w500//snKUzvCl3kGv0RWBjEjnOXMGvdl.jpg"
};

var videosPorCapitulo = {
  "1": {
    "1": "https://vidhidepro.com/v/dnwala7lag9s",
    "2": "https://vidhidepro.com/v/6zwq1ccaznlm",
    "3": "https://vidhidepro.com/v/cjufr50hkv1u",
    "4": "https://vidhidepro.com/v/b4tv5w8w0gty",
    "5": "https://vidhidepro.com/v/kk3bgia6ifcp",
    "6": "https://vidhidepro.com/v/fxo2n7sazjif",
    "7": "https://vidhidepro.com/v/se546r6hjv94",
    "8": "https://vidhidepro.com/v/62uspx5q2z5y",
    "9": "https://vidhidepro.com/v/9cma6r3a7ybf",
    "10": "https://vidhidepro.com/v/45ef51hj9fjp",
    "11": "https://vidhidepro.com/v/fp1uxxrgvsx9",
    "12": "https://vidhidepro.com/v/guc54d0hnk2r",
    "13": "https://vidhidepro.com/v/n6iehqa9hg2b",
    "14": "https://vidhidepro.com/v/76xfwl6z9yub",
    "15": "https://vidhidepro.com/v/jh4d9mbkfcx4",
    "16": "https://vidhidepro.com/v/k2vcqs1pq8z2",
    "17": "https://vidhidepro.com/v/s4s7zigkrqo0",
    "18": "https://vidhidepro.com/v/5p11svtygo7t",
    "19": "https://vidhidepro.com/v/3ehyy00rgkms",
    "20": "https://vidhidepro.com/v/hy1lcnjausla",
    "21": "https://vidhidepro.com/v/wro656wclyo7",
    "22": "https://vidhidepro.com/v/6ow1j6prhvnq",
    "23": "https://vidhidepro.com/v/t3vkf6vlinn5",
  },
  "2": {
    "1": "https://vidhidepro.com/v/zr6ij4536zyy",
    "2": "https://vidhidepro.com/v/gpi9jvpl1kal",
    "3": "https://vidhidepro.com/v/eg8ct2cl4ukf",
    "4": "https://vidhidepro.com/v/91xlvzdrr497",
    "5": "https://vidhidepro.com/v/o8vk0x5iu716",
    "6": "https://vidhidepro.com/v/07x3gl7rr6vy",
    "7": "https://vidhidepro.com/v/j0ni5dkbenpl",
    "8": "https://vidhidepro.com/v/9w4a1230n48e",
    "9": "https://vidhidepro.com/v/xk03lz12mun4",
    "10": "https://vidhidepro.com/v/2qgjaiablssk",
    "11": "https://vidhidepro.com/v/afc9zlvl0mjo",
    "12": "https://vidhidepro.com/v/c5obc3zonw4w",
    "13": "https://vidhidepro.com/v/wado1phke4fu",
    "14": "https://vidhidepro.com/v/py3m8p8v3hnq",
    "15": "https://vidhidepro.com/v/lbhfox5dx7ye",
    "16": "https://vidhidepro.com/v/nuo4xso7lq52",
    "17": "https://vidhidepro.com/v/3c3f4fgf3e5a",
    "18": "https://vidhidepro.com/v/jhg9lbzzsk16",
    "19": "https://vidhidepro.com/v/21zbrryd63mr",
    "20": "https://vidhidepro.com/v/oj64r3n3es20",
    "21": "https://vidhidepro.com/v/z6o5j2plahwp",
    "22": "https://vidhidepro.com/v/h09jyg1ofg43",
    "23": "https://vidhidepro.com/v/sjo60v61gsx4",
  },
  "3": {
    "1": "https://vidhidepro.com/v/z3uht7dm2rb4",
    "2": "https://vidhidepro.com/v/spg764zsm2x7",
    "3": "https://vidhidepro.com/v/tkmc4vcdag1s",
    "4": "https://vidhidepro.com/v/18z56lu0vt3j",
    "5": "https://vidhidepro.com/v/pva6nigffn7a",
    "6": "https://vidhidepro.com/v/pm5z46nj5g8a",
    "7": "https://vidhidepro.com/v/ls1vlmfmthh7",
    "8": "https://vidhidepro.com/v/4cg8olh47bde",
    "9": "https://vidhidepro.com/v/skfs809i5tw3",
    "10": "https://vidhidepro.com/v/exvndhouuqxe",
    "11": "https://vidhidepro.com/v/tsfp4fz4x6gi",
    "12": "https://vidhidepro.com/v/fy0z41i6tg1x",
    "13": "https://vidhidepro.com/v/mdylukvmi19w",
    "14": "https://vidhidepro.com/v/7f6dfi8rqrfh",
    "15": "https://vidhidepro.com/v/wyjzmo500v53",
    "16": "https://vidhidepro.com/v/sp3sxgmewmn8",
    "17": "https://vidhidepro.com/v/zw41309csz33",
    "18": "https://vidhidepro.com/v/tzqpcl07kf9h",
    "19": "https://vidhidepro.com/v/v85y1z3jj7wr",
    "20": "https://vidhidepro.com/v/l1zgbadqzu9f",
    "21": "https://vidhidepro.com/v/52wl66kdrf9v",
    "22": "https://vidhidepro.com/v/wot6ek8r1pk2",
    "23": "https://vidhidepro.com/v/oebym3hxew0l",
    "24": "https://vidhidepro.com/v/qnk2wa5uopm0"
  },
  "4": {
    "1": "https://vidhidepro.com/v/3srhlp0700wd",
    "2": "https://vidhidepro.com/v/bz8gg4ttuft2",
    "3": "https://vidhidepro.com/v/7wcxh585cq5q",
    "4": "https://vidhidepro.com/v/hcs7k373r12i",
    "5": "https://vidhidepro.com/v/isxr0tviafef",
    "6": "https://vidhidepro.com/v/r7zql39r13lt",
    "7": "https://vidhidepro.com/v/si1njove1kp3",
    "8": "https://vidhidepro.com/v/9rjbbk1grsrb",
    "9": "https://vidhidepro.com/v/komb5t4or86h",
    "10": "https://vidhidepro.com/v/n929fzez392k",
    "11": "https://vidhidepro.com/v/vvzfyxgx5umi",
    "12": "https://vidhidepro.com/v/5z9g5lbb2ri8",
    "13": "https://vidhidepro.com/v/lybcne6q53oi",
    "14": "https://vidhidepro.com/v/5grimgsa9mu1",
    "15": "https://vidhidepro.com/v/zctwk3j6rkol",
    "16": "https://vidhidepro.com/v/qgd8lrdsjbva",
    "17": "https://vidhidepro.com/v/oxe36jhc0e0q",
    "18": "https://vidhidepro.com/v/2tbxzl85m1u0",
    "19": "https://vidhidepro.com/v/cocjdq7a3qf8",
    "20": "https://vidhidepro.com/v/ojptf33yeztr",
    "21": "https://vidhidepro.com/v/37vvvpd0uvuc",
    "22": "https://vidhidepro.com/v/s4z1zn5xgr62",
    "23": "https://vidhidepro.com/v/bs2v82xhgdt7",
    "24": "https://vidhidepro.com/v/hzhxp0vqba4j"
  },
  "5": {
    "1": "https://vidhidepro.com/v/a47cxj77id6a",
    "2": "https://vidhidepro.com/v/u4byun62mncm",
    "3": "https://vidhidepro.com/v/qipx11yejxtd",
    "4": "https://vidhidepro.com/v/xclpa5u21tkw",
    "5": "https://vidhidepro.com/v/aevivlbnlg48",
    "6": "https://vidhidepro.com/v/oufg11wxcbhx",
    "7": "https://vidhidepro.com/v/lq3tn75qrp0o",
    "8": "https://vidhidepro.com/v/emn74b8prhb9",
    "9": "https://vidhidepro.com/v/nmz5u2sq480s",
    "10": "https://vidhidepro.com/v/mkudwxo27dkj",
    "11": "https://vidhidepro.com/v/j7rhfqka6nvk",
    "12": "https://vidhidepro.com/v/xh82ggf6fqop",
    "13": "https://vidhidepro.com/v/a473u1ayldrn",
    "14": "https://vidhidepro.com/v/x4gxw1i3ltv7",
    "15": "https://vidhidepro.com/v/6vo5cvu0ipkh",
    "16": "https://vidhidepro.com/v/6vo5cvu0ipkh",
    "17": "https://vidhidepro.com/v/6ql7s0dq1vs8",
    "18": "https://vidhidepro.com/v/aquzgrzf3nbb",
    "19": "https://vidhidepro.com/v/klqz08i5byx1",
    "20": "https://vidhidepro.com/v/14tzjvhc3h4t",
    "21": "https://vidhidepro.com/v/5r8s4g1vxgq9",
    "22": "https://vidhidepro.com/v/3mo2ohtf5rc6"
  },
  "6": {
    "1": "https://vidhidepro.com/v/ty2c8gbmnofs",
    "2": "https://vidhidepro.com/v/jpet6e1wmus9",
    "3": "https://vidhidepro.com/v/zek79jy86422",
    "4": "https://vidhidepro.com/v/ipaj2ed2l5tv",
    "5": "https://vidhidepro.com/v/u09n5kyk11hw",
    "6": "https://vidhidepro.com/v/q7quzr9sf8cz",
    "7": "https://vidhidepro.com/v/858gxu6gmof9",
    "8": "https://vidhidepro.com/v/9teoedjxfq0h",
    "9": "https://vidhidepro.com/v/8lvsusqjjfwv",
    "10": "https://vidhidepro.com/v/5wxzwq8w6uwu",
    "11": "https://vidhidepro.com/v/p12ndc1j02g7",
    "12": "https://vidhidepro.com/v/9x0bhp64a8m3",
    "13": "https://vidhidepro.com/v/25uv6juq7j8g",
    "14": "https://vidhidepro.com/v/2vcmqr9t0fbs",
    "15": "https://vidhidepro.com/v/0r8r8se0k5m2",
    "16": "https://vidhidepro.com/v/fhghwdqfwm7u",
    "17": "https://vidhidepro.com/v/ntciw4c1nf84",
    "18": "https://vidhidepro.com/v/lk9hkpb4f2tc",
    "19": "https://vidhidepro.com/v/z92ip54l0zrb",
    "20": "https://vidhidepro.com/v/oy88cs1lls6u",
    "21": "https://vidhidepro.com/v/87c6jz3t09ct"
  },
  "7": {
    "1": "https://vidhidepro.com/v/8cnvysj8iqf3",
    "2": "https://vidhidepro.com/v/xf9sfc0uqto3",
    "3": "https://vidhidepro.com/v/f1wo88rbs6f4",
    "4": "https://vidhidepro.com/v/7gec5ffq9mcz",
    "5": "https://vidhidepro.com/v/fyp7h1a29ka3",
    "6": "https://vidhidepro.com/v/h1t6mp8evuxj",
    "7": "https://vidhidepro.com/v/xfk5ye1arndq",
    "8": "https://vidhidepro.com/v/7bjm6x0v7vef",
    "9": "https://vidhidepro.com/v/2huv9k0z9e2x",
    "10": "https://vidhidepro.com/v/xf9sfc0uqto3"
     "11": "https://vidhidepro.com/v/cptwdeapnht0",
  "12": "https://vidhidepro.com/v/o3kopvhapwqf",
  "13": "https://lzrdrgz01.github.io/web/?player=jwpl&provider=rand&format=video%2Fmp4&link=https%3A%2F%2Frumble.com%2Fhls-vod%2F6tmc13%2Fplaylist.m3u8",

  }
};

function cargarCapitulos(temporada) {
  listaCapitulos.innerHTML = "";
  var capitulos = videosPorCapitulo[temporada];
  if (!capitulos) {
    listaCapitulos.textContent = "No hay capítulos disponibles para esta temporada.";
    return;
  }
  for (var cap in capitulos) {
    var btn = document.createElement("button");
    btn.textContent = "Capítulo " + cap;
    btn.className = "bg-[#1f1f1f] px-3 py-1 rounded whitespace-nowrap";
    btn.setAttribute("data-capitulo", cap);
    btn.addEventListener("click", function() {
      var capSeleccionado = this.getAttribute("data-capitulo");
      cargarVideo(temporada, capSeleccionado);
      marcarCapitulo(this);
    });
    listaCapitulos.appendChild(btn);
  }
}

function cargarVideo(temporada, capitulo) {
  var url = videosPorCapitulo[temporada] && videosPorCapitulo[temporada][capitulo];
  if (!url) {
    alert("Video no disponible.");
    return;
  }
  iframePrincipal.src = url;
}

function marcarCapitulo(boton) {
  var botones = listaCapitulos.querySelectorAll("button");
  botones.forEach(function(b) {
    b.classList.remove("capitulo-seleccionado");
  });
  boton.classList.add("capitulo-seleccionado");
}

temporadaSelect.addEventListener("change", function() {
  var temp = this.value;
  tempTitulo.textContent = temp;
  cargarCapitulos(temp);
  // Carga primer capítulo por defecto al cambiar temporada
  var primeraClave = Object.keys(videosPorCapitulo[temp])[0];
  cargarVideo(temp, primeraClave);
  // Marcar el primer capítulo seleccionado
  var primerBoton = listaCapitulos.querySelector("button");
  if (primerBoton) {
    marcarCapitulo(primerBoton);
  }
});

// Al cargar la página
window.addEventListener("load", function() {
  var tempInicial = temporadaSelect.value;
  cargarCapitulos(tempInicial);
  var primerCap = Object.keys(videosPorCapitulo[tempInicial])[0];
  cargarVideo(tempInicial, primerCap);
  // Marca el primer capítulo
  var primerBoton = listaCapitulos.querySelector("button");
  if (primerBoton) {
    marcarCapitulo(primerBoton);
  }
});
