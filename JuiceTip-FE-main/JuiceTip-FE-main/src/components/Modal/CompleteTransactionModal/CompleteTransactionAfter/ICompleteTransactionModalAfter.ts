import { IProduct } from "../../../../Services/productService"

export interface ICompleteTransactionAfter {
    isVisible: boolean
    setIsVisible: (isVisible: boolean) => void
    product: IProduct
}