import { ApiProperty } from '@nestjs/swagger'

export class Pagination {
  @ApiProperty({ description: '页码' })
  readonly page: number
  @ApiProperty({ description: '每页数量' })
  readonly pageSize: number
}
