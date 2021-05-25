import { SetStorage } from '@/data/protocols/cache/set-storage'
import { SaveAccessToken } from '@/domain/usecases/save-access-token'

export class LocalSaveAccessToken implements SaveAccessToken {
  constructor (private readonly setStorge: SetStorage) {}
  async save (accessToken: string): Promise<void> {
    await this.setStorge.set('accessToken', accessToken)
  }
}
