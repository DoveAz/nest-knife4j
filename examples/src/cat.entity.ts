import { ApiProperty } from '@nestjs/swagger'

export class Cat {
  @ApiProperty({ description: '猫咪名称' })
  readonly name: string
}
