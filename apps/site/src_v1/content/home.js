export const HERO = {
  title: "CETER",
  subtitle: "Centro Terapéutico de Rehabilitación de Adicciones y Salud Mental.",
  imageAlt: "Vista del centro CETER"
};

export const SECTIONS = [
  {
    id: "mision",
    eyebrow: null,
    title: "Nuestra Misión",
    paragraphs: [
      "Se inicia la puesta en marcha del Programa Ambulatorio CETER como una respuesta terapéutica efectiva al tratamiento de personas con adicciones en fases iniciales o moderadas de la enfermedad, cuyo eje principal consiste en no desarraigar al paciente de su medio familiar, laboral, académico y social, en aquellos casos donde el grado de compromiso adictivo así lo aconseje, conforme al resultado de una exhaustiva evaluación multiprofesional."
    ],
    cta: { to: "/metodologia", label: "Conocer Metodología" },
    backgroundImage: "ayuda"
  },
  {
    id: "pai",
    eyebrow: null,
    title: "Programa Ambulatorio Intensivo (PAI)",
    paragraphs: [
      "El Programa Ambulatorio Intensivo (PAI) responde a la necesidad básica de no descontextualizar a las personas de su vida cotidiana y de su entorno familiar, de su trabajo y/o actividades académicas, y está orientado, por tanto, al tratamiento de adicciones cuyo compromiso de dependencia sea de fase leve a moderada."
    ],
    cta: { to: "/metodologia", label: "Nuestro Método" },
    backgroundImage: "pai"
  },
  {
    id: "programa",
    eyebrow: null,
    title: "Plan del Programa",
    paragraphs: [
      "El PAI considera una duración estimada de 10 meses, divididos en 5 fases:"
    ],
    list: [
      { strong: "Ingreso:", text: "Desintoxicación" },
      { strong: "Fase A:", text: "Acogida y Motivación" },
      { strong: "Fase B:", text: "Conciencia efectiva y Crecimiento personal" },
      {
        strong: "Fase C:",
        text: "Elaboración de Proyecto de Vida y Establecimiento de nuevas redes"
      },
      {
        strong: "Fase de Seguimiento:",
        text: "Asunción de Nuevos Estilos de Vida y Autonomía"
      },
      { strong: "Graduación:", text: "Alta Médica Terapéutica" }
    ],
    backgroundImage: "brain"
  },
  {
    id: "mantencion",
    eyebrow: null,
    title: "Plan de Mantención Continua",
    paragraphs: [
      "Este programa considera un Plan de Mantención Continua por 10 meses posterior al alta médica, y que consiste en atenciones psiquiátricas, intervenciones de asistente social, terapias grupales y maratones terapéuticas realizadas con una frecuencia semestral durante este período."
    ],
    backgroundImage: "separacion"
  },
  {
    id: "contacto",
    eyebrow: null,
    title: "Contacto",
    paragraphs: [
      "Da el primer paso. Contáctanos para recibir información y asesoramiento confidencial."
    ],
    cta: { to: "/#whatsapp", label: "Conversemos", isWhatsApp: true },
    backgroundImage: "tren"
  }
];
