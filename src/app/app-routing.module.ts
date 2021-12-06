import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ShoppingComponent} from './shopping/shopping.component';
import { MapComponent } from './map/map.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ViewHistoryComponent } from './view-history/view-history.component';
import { AdminComponent } from './admin/admin.component';
import { InfomationComponent } from './shopping-cart/infomation/infomation.component';
import { ViewHistoryDetailComponent } from './view-history/view-history-detail/view-history-detail.component';
import { HeaderAdminComponent } from './header-admin/header-admin.component';
import { ViewHistoryDetailAdminComponent } from './view-history-admin/view-history-detail-admin/view-history-detail-admin.component';
import { ViewHistoryAdminComponent } from './view-history-admin/view-history-admin.component';
import { ShowViewHistoryComponent } from './view-history/show-view-history/show-view-history.component';
import { SearchPhoneComponent } from './view-history/search-phone/search-phone.component';
import { ShowViewHistoryAdminComponent } from './view-history-admin/show-view-history-admin/show-view-history-admin.component';
import { EditExcelComponent } from './header-admin/edit-excel/edit-excel.component';
import { UpdateWardComponent } from './header-admin/update-ward/update-ward.component';
import { PreparationComponent } from './view-history-admin/show-view-history-admin/preparation/preparation.component';
import { ProcessedComponent } from './view-history-admin/show-view-history-admin/processed/processed.component';
import { FinishComponent } from './view-history-admin/show-view-history-admin/finish/finish.component';
import { CancelComponent } from './view-history-admin/show-view-history-admin/cancel/cancel.component';
import { AuthGuard } from './service/auth.guard';
import { CheckCartGuard } from './service/check-cart.guard';
import { SellerComponent } from './seller/seller.component';
import { AddProductComponent } from './seller/add-product/add-product.component';
import { ShowShopingComponent } from './Shopping/show-shoping/show-shoping.component';
import { SearchSellerComponent } from './shopping/search-seller/search-seller.component';
import { ViewListSellerComponent } from './shopping/view-list-seller/view-list-seller.component';
import { ContractManagerComponent } from './header-admin/contract-manager/contract-manager.component';
import { PrepareContractComponent } from './header-admin/contract-manager/prepare-contract/prepare-contract.component';
import { FinishContractComponent } from './header-admin/contract-manager/finish-contract/finish-contract.component';
import { RejectContractComponent } from './header-admin/contract-manager/reject-contract/reject-contract.component';
import { ShowProductComponent } from './seller/show-product/show-product.component';
import { UpdateProductComponent } from './seller/update-product/update-product.component';
import { ShowShoppingDetailComponent } from './shopping/show-shopping-detail/show-shopping-detail.component';
import { VnpayReturnComponent } from './shopping-cart/vnpay-return/vnpay-return.component';
import { InfomationVnpayComponent } from './shopping-cart/infomation-vnpay/infomation-vnpay.component';
import { CofirmInfomationComponent } from './shopping-cart/cofirm-infomation/cofirm-infomation.component';
import { FeedbackComponent } from './view-history/feedback/feedback.component';
import { ViewHistorySellerComponent } from './view-history-seller/view-history-seller.component';
import { ViewHistoryDetailSellerComponent } from './view-history-seller/view-history-detail-seller/view-history-detail-seller.component';
import { SellerRegistrationComponent } from './seller/seller-registration/seller-registration.component';
import { UpdateSellerComponent } from './seller/update-seller/update-seller.component';
import { ChangePasswordComponent } from './seller/change-password/change-password.component';
import { AddPromotionComponent } from './seller/add-promotion/add-promotion.component';
import { ShowPromotionComponent } from './seller/show-promotion/show-promotion.component';
import { HeaderAdminFBComponent } from './header-admin-fb/header-admin-fb.component';
import { ChoosePromotionComponent } from './seller/choose-promotion/choose-promotion.component';
import { InformationContractComponent } from './header-admin/contract-manager/information-contract/information-contract.component';
import { ShowFeedbackComponent } from './header-admin-fb/show-feedback/show-feedback.component';
import { InformationPrepareComponent } from './header-admin/contract-manager/prepare-contract/information-prepare/information-prepare.component';
import { ShowFeedbackSellerComponent } from './seller/show-feedback-seller/show-feedback-seller.component';
import { InfomationPrepareFeedbackComponent } from './header-admin-fb/show-feedback/prepare-feedback/infomation-prepare-feedback/infomation-prepare-feedback.component';
import { InformationFeedbackComponent } from './header-admin-fb/show-feedback/information-feedback/information-feedback.component';
import { InformationProcessedFeedbackComponent } from './header-admin-fb/show-feedback/processed-feedback/information-processed-feedback/information-processed-feedback.component';
import { InformationFeedbackSellerComponent } from './seller/show-feedback-seller/information-feedback-seller/information-feedback-seller.component';
import { SuccessRegistrationComponent } from './seller/seller-registration/success-registration/success-registration.component';
import { CashReturnComponent } from './shopping-cart/cash-return/cash-return.component';
import { UpdatePromotionComponent } from './seller/update-promotion/update-promotion.component';
import { ShippingComponent } from './seller/shipping/shipping.component';
import { CodeOtpComponent } from './view-history/code-otp/code-otp.component';
import { PhoneNumberCustomerComponent } from './shopping-cart/phone-number-customer/phone-number-customer.component';
import { CodeOtpCustomerComponent } from './shopping-cart/code-otp-customer/code-otp-customer.component';
import { PhoneNumberSellerComponent } from './seller/phone-number-seller/phone-number-seller.component';
import { CodeOtpSellerComponent } from './seller/code-otp-seller/code-otp-seller.component';
import { AuthorizedStoreComponent } from './header-admin/authorized-store/authorized-store.component';





const appRoutes : Routes = [
  {path:'manager-store', component: AuthorizedStoreComponent},
  {path:'map', component: MapComponent},
  {path:'', component: SearchSellerComponent},
  {path:'update-ward', component: UpdateWardComponent},
  {path:'shopping', component: ShoppingComponent},
  {path:'shopping-cart', component: ShoppingCartComponent},
  {path:'view-history', component: ViewHistoryComponent},
  {path:'admin', component: AdminComponent},
  {path:'infomation', component: InfomationComponent,canActivate:[CheckCartGuard]},
  {path:'ConfirmInfomation', component: CofirmInfomationComponent},
  {path:'infomation-Vnpay', component: InfomationVnpayComponent,canActivate:[CheckCartGuard]},
  {path:'view-history-detail', component: ViewHistoryDetailComponent},
  {path:'header-admin', component: HeaderAdminComponent, canActivate: [AuthGuard]},
  {path:'header-admin-FB', component:HeaderAdminFBComponent, canActivate: [AuthGuard]},
  {path:'view-history-admin', component: ViewHistoryAdminComponent,canActivate: [AuthGuard]},
  {path:'view-history-seller', component: ViewHistorySellerComponent,canActivate: [AuthGuard]},
  {path:'view-history-detail-admin/:orderId', component:  ViewHistoryDetailAdminComponent},
  {path:'view-history-detail-seller/:orderId', component:  ViewHistoryDetailSellerComponent},
  {path:'show-view-history', component: ShowViewHistoryComponent},
  {path:'search-phone', component:SearchPhoneComponent },
  {path:'show-view-history-admin', component:ShowViewHistoryAdminComponent },
  {path:'app-edit-excel', component:EditExcelComponent },
  {path:'preparation', component:PreparationComponent },
  {path:'processed', component:ProcessedComponent },
  {path:'finish', component:FinishComponent },
  {path:'cancel', component:CancelComponent  },
  {path:'seller/:accountId', component:SellerComponent ,canActivate: [AuthGuard] },
  {path:'add-product', component:AddProductComponent },
  {path:'show-product-seller', component:ShowProductComponent },
  {path:'update-product/:productId', component:UpdateProductComponent },
  {path:'show-product-detail/:productId', component:ShowShoppingDetailComponent },
  {path:'vnpay-return', component:VnpayReturnComponent },
  {path:'feedback', component:FeedbackComponent},
  {path:'seller-registration', component:SellerRegistrationComponent},
  {path:'contract-manager', component:ContractManagerComponent,canActivate: [AuthGuard]  },
  {path:'prepare-contract', component:PrepareContractComponent  },
  {path:'finish-contract', component:FinishContractComponent  },
  {path:'reject-contract', component:RejectContractComponent  },
  {path:'information-contract/:registerFormId', component:InformationContractComponent },
  {path:'information-contract-prepare/:registerFormId', component:InformationPrepareComponent },
  {path:'show-product/:sellerId', component: ShowShopingComponent},
  {path:'shopping', component: ShoppingComponent},
  {path:'view-list-seller/:productName', component:ViewListSellerComponent  },
  {path:'update-information', component:UpdateSellerComponent,canActivate: [AuthGuard]},
  {path:'change-password', component:ChangePasswordComponent,canActivate: [AuthGuard]},
  {path:'add-promotion', component:AddPromotionComponent},
  {path:'choose-promotion', component:ChoosePromotionComponent},
  {path:'show-promotion', component:ShowPromotionComponent,canActivate: [AuthGuard]},
  {path:'show-feedback-seller', component:ShowFeedbackSellerComponent,canActivate: [AuthGuard]},
  {path:'show-feedback', component:ShowFeedbackComponent,canActivate: [AuthGuard]},
  {path:'show-feedback-detail-prepare/:feedbackId', component:InfomationPrepareFeedbackComponent},
  {path:'show-feedback-detail-process/:feedbackId', component:InformationProcessedFeedbackComponent},
  {path:'show-feedback-detail/:feedbackId', component:InformationFeedbackComponent},
  {path:'show-feedback-detail-seller/:feedbackId', component:InformationFeedbackSellerComponent},
  {path:'success-registration', component:SuccessRegistrationComponent},
  {path:'cash-return', component:CashReturnComponent},
  {path:'update-promotion/:promotionId', component:UpdatePromotionComponent},
  {path:'shipping', component:ShippingComponent,canActivate: [AuthGuard]},
  {path:'codeOTP', component:CodeOtpComponent},
  {path:'phone-customer', component:PhoneNumberCustomerComponent},
  {path:'codeOTP-customer', component:CodeOtpCustomerComponent},
  {path:'phone-registration', component:PhoneNumberSellerComponent},
  {path:'codeOTP-registration', component:CodeOtpSellerComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
