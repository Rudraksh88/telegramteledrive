import { Column, Entity, OneToMany } from 'typeorm'
import { BaseModelWithID } from '../base/BaseModel'
import { Files } from './Files'

@Entity()
export class Users extends BaseModelWithID {

  @Column()
  username: string

  @Column({ default: null })
  name?: string

  @Column({ default: null, select: false })
  email?: string

  @Column({ default: null })
  tg_id?: string

  @Column({ default: 'free' })
  plan?: 'free' | 'premium' | 'professional'

  @Column({ default: null })
  subscription_id?: string

  @Column({ default: null })
  midtrans_id?: string

  @Column({ default: null })
  plan_expired_at?: Date

  @Column({ default: null })
  role?: string

  @OneToMany(() => Files, files => files.user)
  files?: Files[]

  @Column('jsonb', { default: null })
  settings?: {
    expandable_rows?: boolean,
    theme?: 'light' | 'dark',
    saved_location?: string
  }
}