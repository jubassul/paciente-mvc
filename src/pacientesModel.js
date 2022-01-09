export default class PacientesModel {
  pacientes = localStorage.hasOwnProperty("pacientes")
    ? JSON.parse(localStorage.getItem("pacientes"))
    : [];

  currentId = 1;

  add(data) {
    this.pacientes.push({
      ...data,
      id: this.currentId,
    });

    this.currentId++;
    localStorage.setItem("pacientes", JSON.stringify(this.pacientes));
  }

  edit(id, data) {
    const pacienteIndex = this.pacientes.findIndex((p) => p.id === id);

    if (pacienteIndex > -1) {
      this.pacientes[pacienteIndex] = { ...data, id };
      localStorage.setItem("pacientes", JSON.stringify(this.pacientes));
    }
  }

  delete(id) {
    this.pacientes = this.pacientes.filter((p) => p.id !== id);
    localStorage.setItem("pacientes", JSON.stringify(this.pacientes));
  }
}
