//Source code generated by AppGPT (www.appgpt.tech)

//Class to create tables and seed new database
import { DataSource } from 'typeorm';
import { DBConfiguration } from './Configuration';
import { SettingsEntity } from './db/Settings.entity';
//autogenerate imports based on resources
import { UsersEntity } from './db/Users.entity';
import { DepartmentsEntity } from './db/Departments.entity';
import { InitiativesEntity } from './db/Initiatives.entity';
import { GoalsEntity } from './db/Goals.entity';
import { EmissionSourcesEntity } from './db/EmissionSources.entity';
import { ResourceUsageEntity } from './db/ResourceUsage.entity';

export class Database {
  static dbConfiguration: DBConfiguration;
  public static ds: DataSource;

  static async Initialize(dbConfiguration: DBConfiguration) {
    Database.dbConfiguration = dbConfiguration;
    let dbConfig: any = dbConfiguration as any;
    //Autogenerate entities array from resource names

    dbConfig.entities = [
      SettingsEntity,
      UsersEntity,
      DepartmentsEntity,
      InitiativesEntity,
      GoalsEntity,
      EmissionSourcesEntity,
      ResourceUsageEntity,
    ];
    Database.ds = new DataSource(dbConfig);
    await Database.ds.initialize();

    //TODO: Drop all tables

    await Database.Seed();
  }
  static async Seed() {
    let data: any = {
      Users: [
        {
          userName: 'userName 1',
          department: 1,
          password: 'password 1',
          email: 'email 1',
          id: 4,
        },
        {
          userName: 'userName 2',
          department: 2,
          password: 'password 2',
          email: 'email 2',
          id: 38,
        },
        {
          userName: 'userName 3',
          department: 3,
          password: 'password 3',
          email: 'email 3',
          id: 38,
        },
        {
          userName: 'userName 4',
          department: 4,
          password: 'password 4',
          email: 'email 4',
          id: 73,
        },
        {
          userName: 'userName 5',
          department: 5,
          password: 'password 5',
          email: 'email 5',
          id: 83,
        },
      ],
      Departments: [
        { departmentName: 'departmentName 1', departmentHead: 1, id: 59 },
        { departmentName: 'departmentName 2', departmentHead: 2, id: 50 },
        { departmentName: 'departmentName 3', departmentHead: 3, id: 85 },
        { departmentName: 'departmentName 4', departmentHead: 4, id: 47 },
        { departmentName: 'departmentName 5', departmentHead: 5, id: 86 },
      ],
      Initiatives: [
        {
          name: 'name 1',
          description: 'description 1',
          startDate: '2024-11-26T17:38:22.392Z',
          endDate: '2024-10-14T18:31:35.684Z',
          relatedDepartment: 1,
          status: 'status 1',
          id: 13,
        },
        {
          name: 'name 2',
          description: 'description 2',
          startDate: '2024-06-13T14:01:54.117Z',
          endDate: '2023-10-29T20:53:59.856Z',
          relatedDepartment: 2,
          status: 'status 2',
          id: 19,
        },
        {
          name: 'name 3',
          description: 'description 3',
          startDate: '2025-01-07T17:52:41.184Z',
          endDate: '2024-04-11T23:39:30.736Z',
          relatedDepartment: 3,
          status: 'status 3',
          id: 59,
        },
        {
          name: 'name 4',
          description: 'description 4',
          startDate: '2024-04-02T03:11:06.036Z',
          endDate: '2024-06-08T04:44:27.731Z',
          relatedDepartment: 4,
          status: 'status 4',
          id: 86,
        },
        {
          name: 'name 5',
          description: 'description 5',
          startDate: '2024-12-25T03:05:12.194Z',
          endDate: '2023-07-10T05:16:35.881Z',
          relatedDepartment: 5,
          status: 'status 5',
          id: 21,
        },
      ],
      Goals: [
        {
          name: 'name 1',
          description: 'description 1',
          targetDate: '2024-02-13T01:18:09.751Z',
          relatedDepartment: 1,
          status: 'status 1',
          id: 69,
        },
        {
          name: 'name 2',
          description: 'description 2',
          targetDate: '2023-08-04T07:41:34.771Z',
          relatedDepartment: 2,
          status: 'status 2',
          id: 54,
        },
        {
          name: 'name 3',
          description: 'description 3',
          targetDate: '2025-02-26T10:50:58.676Z',
          relatedDepartment: 3,
          status: 'status 3',
          id: 68,
        },
        {
          name: 'name 4',
          description: 'description 4',
          targetDate: '2024-03-17T03:10:35.116Z',
          relatedDepartment: 4,
          status: 'status 4',
          id: 22,
        },
        {
          name: 'name 5',
          description: 'description 5',
          targetDate: '2024-06-22T23:17:32.606Z',
          relatedDepartment: 5,
          status: 'status 5',
          id: 22,
        },
      ],
      EmissionSources: [
        {
          sourceType: 'sourceType 1',
          quantityUsed: 0.35,
          emissionFactors: 0.31,
          totalEmissions: 0.27,
          id: 82,
        },
        {
          sourceType: 'sourceType 2',
          quantityUsed: 0.72,
          emissionFactors: 0.18,
          totalEmissions: 0.09,
          id: 18,
        },
        {
          sourceType: 'sourceType 3',
          quantityUsed: 0.6,
          emissionFactors: 0.82,
          totalEmissions: 0.58,
          id: 22,
        },
        {
          sourceType: 'sourceType 4',
          quantityUsed: 0.9,
          emissionFactors: 0.71,
          totalEmissions: 0.05,
          id: 65,
        },
        {
          sourceType: 'sourceType 5',
          quantityUsed: 0.31,
          emissionFactors: 0.3,
          totalEmissions: 0.57,
          id: 57,
        },
      ],
      ResourceUsage: [
        {
          resourceType: 'resourceType 1',
          quantityConsumed: 0.64,
          unitOfMeasurement: 'unitOfMeasurement 1',
          periodOfConsumption: '2024-07-14T00:29:04.182Z',
          id: 29,
        },
        {
          resourceType: 'resourceType 2',
          quantityConsumed: 0.58,
          unitOfMeasurement: 'unitOfMeasurement 2',
          periodOfConsumption: '2023-05-16T20:57:10.499Z',
          id: 55,
        },
        {
          resourceType: 'resourceType 3',
          quantityConsumed: 0.93,
          unitOfMeasurement: 'unitOfMeasurement 3',
          periodOfConsumption: '2024-07-16T04:46:21.334Z',
          id: 96,
        },
        {
          resourceType: 'resourceType 4',
          quantityConsumed: 0.65,
          unitOfMeasurement: 'unitOfMeasurement 4',
          periodOfConsumption: '2023-12-19T02:29:03.204Z',
          id: 18,
        },
        {
          resourceType: 'resourceType 5',
          quantityConsumed: 0.67,
          unitOfMeasurement: 'unitOfMeasurement 5',
          periodOfConsumption: '2023-08-29T11:41:55.489Z',
          id: 24,
        },
      ],
    };
    //Autogenerate multiple such calls ie for each resource and its data object
    let isSeeded = await this.IsSeeded();
    //if (!isSeeded) {
    //forcing app recreation
    if (true) {
      console.log('   Seeding database...');
      await this.SeedResource('UsersEntity', data.Users);
      await this.SeedResource('DepartmentsEntity', data.Departments);
      await this.SeedResource('InitiativesEntity', data.Initiatives);
      await this.SeedResource('GoalsEntity', data.Goals);
      await this.SeedResource('EmissionSourcesEntity', data.EmissionSources);
      await this.SeedResource('ResourceUsageEntity', data.ResourceUsage);
      await this.SeedResource('SettingsEntity', {
        settingname: 'isSeeded',
        settingvalue: 'true',
      });
    } else {
      console.log('   Database seeded already!');
    }
  }
  static async IsSeeded() {
    const repo = Database.ds.getRepository('SettingsEntity');
    let rec: any = await repo.findOne({
      select: {
        settingname: true,
        settingvalue: true,
      },
      where: {
        settingname: 'isSeeded',
      },
    });
    if (rec && rec.settingvalue) return true;
    return false;
  }
  static async SeedResource(resourceName: any, resourceData: any) {
    const repo = Database.ds.getRepository(resourceName);
    //await repo.clear();
    console.log('   Seeding table ' + resourceName);
    await repo.upsert(resourceData, ['id']);
  }
}
