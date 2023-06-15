import { MockReqFn } from '@/request/http'

export const mockRqeLogin:MockReqFn = () => {
  return  {
        code: 200,
        data: {
            // id: "226",
		    // name:"许磊"
        },
        msg: ''
    }
}