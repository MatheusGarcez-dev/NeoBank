document.addEventListener("DOMContentLoaded", () => {
    // Animação para o texto principal (já criado anteriormente)
    gsap.from(".txt-topo h1", {
      duration: 1.2,
      y: -50,
      opacity: 0,
      ease: "power2.out",
    });
  
    gsap.from(".txt-topo h2", {
      duration: 1.2,
      y: 50,
      opacity: 0,
      ease: "power2.out",
      delay: 0.3,
    });
  
    // Animação para os boxes da box-topo
    gsap.from(".box-topo .flexbox", {
      duration: 1,       // Duração da animação em segundos
      y: 50,             // Desliza de baixo para cima
      opacity: 0,        // Começa invisível
      ease: "power2.out", // Efeito de suavidade
      stagger: 0.2,      // Aplica um pequeno atraso entre os boxes
      delay: 0.5,        // Inicia 0.5 segundos depois do h2
    });
      // Animação para o botão
  gsap.from(".button", {
    duration: 1,
    y: 30,            // Move 30px de baixo para cima
    opacity: 0,       // Começa invisível
    ease: "power2.out",
    delay: 1,       // Inicia após as outras animações
  });
});

document.addEventListener("DOMContentLoaded", () => {
    // Registrar o plugin ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
  
    // Animação para o título
    gsap.from(".txt-sec2 h1", {
      duration: 1.2,
      y: -50, // Move de cima para baixo
      opacity: 0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".sec2", // Dispara quando ".sec2" entra na tela
        start: "top 80%", // Quando o topo de .sec2 está a 80% da viewport
      },
    });
  
    // Animação para a linha
    gsap.from(".linha", {
      duration: 1,
      scaleX: 0, // Começa com largura 0
      transformOrigin: "left center", // Expande a partir da esquerda
      opacity: 0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".sec2",
        start: "top 40%",
      },
    });
  
    // Animação para o parágrafo
    gsap.from(".p2 p", {
      duration: 1.2,
      y: 50, // Move de baixo para cima
      opacity: 0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".sec2",
        start: "top 40%",
      },
    });
  
    // Animação para o botão
    gsap.from(".bt2", {
      duration: 1,
      scale: 0.8, // Começa menor
      opacity: 0,
      ease: "elastic.out(1, 0.5)", // Efeito elástico
      scrollTrigger: {
        trigger: ".sec2",
        start: "top 40%",
      },
    });
  });
  

  document.addEventListener("DOMContentLoaded", () => {
    // Registrar o plugin ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
  
    // Animação para o ícone e título na sec3
    gsap.from(".txt-sec3 i", {
      duration: 1,
      y: -50, // Move 50px acima da posição final
      opacity: 0, // Começa invisível
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".sec3", // Dispara quando ".sec3" entra na tela
        start: "top 80%", // Quando o topo da sec3 está 80% visível
      },
    });
  
    gsap.from(".txt-sec3 h1", {
      duration: 1.2,
      y: 50, // Move 50px abaixo da posição final
      opacity: 0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".sec3",
        start: "top 75%",
      },
    });
  
    gsap.from(".txt-sec3 h6", {
      duration: 1.2,
      x: -50, // Move 50px à esquerda da posição final
      opacity: 0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".sec3",
        start: "top 75%",
      },
    });
  
    // Animação para os parágrafos na sec3
    gsap.from(".p3 p", {
      duration: 1.2,
      x: 50, // Move 50px à direita da posição final
      opacity: 0,
      ease: "power2.out",
      stagger: 0.2, // Pequeno atraso entre os parágrafos
      scrollTrigger: {
        trigger: ".sec3",
        start: "top 70%",
      },
    });
  
    // Animação para o botão
    gsap.from(".bt3", {
      duration: 1,
      scale: 0.8, // Começa menor
      opacity: 0,
      ease: "elastic.out(1, 0.5)", // Efeito elástico
      scrollTrigger: {
        trigger: ".sec3",
        start: "top 70%",
      },
    });
  });

  
  document.addEventListener("DOMContentLoaded", () => {
    // Registrar o plugin ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
  
    // Animação para o título na sec4
    gsap.from(".txt4 h1", {
      duration: 1.2,
      y: -50, // Move 50px acima da posição final
      opacity: 0, // Começa invisível
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".sec4", // Dispara quando ".sec4" entra na tela
        start: "top 80%", // Quando o topo da sec4 está 80% visível
      },
    });
  
    // Animação para os elementos de flex4
    gsap.from(".flex4 .box", {
      duration: 1,
      y: 50, // Move 50px abaixo da posição final
      opacity: 0,
      stagger: 0.2, // Pequeno atraso entre os elementos
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".sec4",
        start: "top 70%",
      },
    });
  
    // Animação para o botão
    gsap.from(".bt4", {
      duration: 1,
      scale: 0.8, // Começa menor
      opacity: 0,
      ease: "elastic.out(1, 0.5)", // Efeito elástico
      scrollTrigger: {
        trigger: ".sec4",
        start: "top 70%",
      },
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    // Registrar o plugin ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
  
    // Animação para a imagem na sec5
    gsap.from(".img5 img", {
      duration: 1,
      scale: 0.8, // Começa menor
      opacity: 0, // Começa invisível
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".sec5", // Dispara quando ".sec5" entra na tela
        start: "top 60%", // Quando o topo da sec5 está 80% visível
      },
    });
  
    // Animação para o título na sec5
    gsap.from(".txt5 h1", {
      duration: 1.2,
      y: 50, // Move 50px abaixo da posição final
      opacity: 0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".sec5",
        start: "top 55%",
      },
    });
  
    // Animação para os parágrafos na sec5
    gsap.from(".txt5 p", {
      duration: 1,
      y: 30, // Move 30px abaixo da posição final
      opacity: 0,
      stagger: 0.3, // Pequeno atraso entre os parágrafos
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".sec5",
        start: "top 50%",
      },
    });
  });


  document.addEventListener("DOMContentLoaded", () => {
    // Registrar o plugin ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
  
    // Animação para o título na sec6
    gsap.from(".txt6 h2", {
      duration: 1.2,
      y: 50, // Move 50px abaixo da posição final
      opacity: 0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".sec6", // Dispara quando ".sec6" entra na tela
        start: "top 80%", // Quando o topo da sec6 está 80% visível
      },
    });
  
    // Animação para os elementos de box6 na flexs6
    gsap.from(".flexs6 .box6", {
      duration: 1,
      y: 30, // Move 30px abaixo da posição final
      opacity: 0,
      stagger: 0.2, // Pequeno atraso entre os elementos
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".sec6",
        start: "top 70%",
      },
    });
  
    // Animação para a imagem na sec6
    gsap.from(".img6 img", {
      duration: 1,
      scale: 0.9, // Começa menor
      opacity: 0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".sec6",
        start: "top 70%",
      },
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    // Registrar o plugin ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
  
    // Animação para o título na sec7
    gsap.from(".txt7 h2", {
      duration: 1.2,
      y: 50, // Move 50px abaixo da posição final
      opacity: 0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".sec7", // Dispara quando ".sec7" entra na tela
        start: "top 80%", // Quando o topo da sec7 está 80% visível
      },
    });
  
    // Animação para os elementos na flex7
    gsap.from(".flex7 .box7", {
      duration: 1,
      y: 30, // Move 30px abaixo da posição final
      opacity: 0,
      stagger: 0.2, // Pequeno atraso entre os elementos
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".sec7",
        start: "top 70%",
      },
    });
  });
  