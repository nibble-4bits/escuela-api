import expect from 'expect';
import faker from 'faker';
import { v4 as uuid } from 'uuid';
import Alumno from '../../src/models/Alumno';

describe('Alumno model tests', () => {
  const alumnoProps = {
    matricula: uuid(),
    nombre: faker.name.firstName(),
    apellidos: faker.name.lastName(),
    escuela: faker.company.companyName(),
    correo: faker.internet.email(),
    semestre: faker.random.number().toString(),
    carrera: faker.name.jobTitle()
  };

  it('should create an instance of Alumno with correct props', () => {
    const alumno = new Alumno(
      alumnoProps.matricula,
      alumnoProps.nombre,
      alumnoProps.apellidos,
      alumnoProps.escuela,
      alumnoProps.correo,
      alumnoProps.semestre,
      alumnoProps.carrera
    );

    expect(alumno.matricula).toBe(alumnoProps.matricula);
    expect(alumno.nombre).toBe(alumnoProps.nombre);
    expect(alumno.apellidos).toBe(alumnoProps.apellidos);
    expect(alumno.escuela).toBe(alumnoProps.escuela);
    expect(alumno.correo).toBe(alumnoProps.correo);
    expect(alumno.semestre).toBe(alumnoProps.semestre);
    expect(alumno.carrera).toBe(alumnoProps.carrera);
  });

  it('should serialize instance of Alumno to a plain JS object', () => {
    const alumno = new Alumno(
      alumnoProps.matricula,
      alumnoProps.nombre,
      alumnoProps.apellidos,
      alumnoProps.escuela,
      alumnoProps.correo,
      alumnoProps.semestre,
      alumnoProps.carrera
    );

    const alumnoJS = alumno.toJS();

    expect(alumnoJS).toEqual(alumnoProps);
  });

  it('should factory new Alumno', () => {});

  it('should factory new Alumno from DB result', () => {});
});
