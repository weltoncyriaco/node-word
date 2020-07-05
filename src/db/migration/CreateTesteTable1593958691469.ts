import { MigrationInterface, QueryRunner, Table, TableIndex } from 'typeorm'

export class CreateTesteTable1593958691469 implements MigrationInterface {
  async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'test',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment'
        },
        {
          name: 'name',
          type: 'varchar',
          length: '45'
        },
        {
          name: 'surname',
          type: 'varchar',
          length: '45'
        }
      ]
    }), true)

    await queryRunner.createIndex('test', new TableIndex({
      name: 'IDX_TEST_NAME',
      columnNames: ['name']
    }))
  }

  async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('question')
  }
}
