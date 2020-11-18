import dynamoose from 'dynamoose';
import Repository from './Repository';
import Alumno from '../models/Alumno';

const alumnoSchema = new dynamoose.Schema({
  matricula: {
    type: String,
    hashKey: true
  },
  nombre: String,
  apellidos: String,
  escuela: String,
  correo: String,
  semestre: String,
  carrera: String
});

export default class AlumnoRepository implements Repository<Alumno> {
  // eslint-disable-next-line class-methods-use-this
  get db(): any {
    return dynamoose.model('alumno', alumnoSchema);
  }

  async create(alumno: Alumno): Promise<Alumno> {
    await this.db.create({
      matricula: alumno.matricula,
      nombre: alumno.nombre,
      apellidos: alumno.apellidos,
      escuela: alumno.escuela,
      correo: alumno.correo,
      semestre: alumno.semestre,
      carrera: alumno.carrera
    });
    return alumno;
  }

  async update(alumno: Alumno): Promise<Alumno> {
    await this.db.update(alumno.toJS());
    return alumno;
  }

  async delete(alumno: Alumno): Promise<void> {
    await this.db.delete(alumno.matricula);
  }

  async get(): Promise<Alumno[]> {
    const results = await this.db.scan().exec();
    return results.map((r: any) => Alumno.fromDBResult(r));
  }

  async getById(matricula: string): Promise<Alumno | null> {
    const result = await this.db.get(matricula);
    if (!result) {
      return null;
    }
    return Alumno.fromDBResult(result);
  }
}
