import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { ShowShopingComponent } from './Shopping/show-shoping/show-shoping.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { SharedService } from './service/shared.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MapComponent } from './map/map.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ViewHistoryComponent } from './view-history/view-history.component';
import { ViewHistoryDetailComponent } from './view-history/view-history-detail/view-history-detail.component';
import { AdminComponent } from './admin/admin.component';
import { ShowShoppingCartComponent } from './shopping-cart/show-shopping-cart/show-shopping-cart.component';
import { InfomationComponent } from './shopping-cart/infomation/infomation.component';
import { HeaderAdminComponent } from './header-admin/header-admin.component';

import { AgmCoreModule } from '@agm/core';
import { ShowViewHistoryComponent } from './view-history/show-view-history/show-view-history.component';
import { ViewHistoryAdminComponent } from './view-history-admin/view-history-admin.component';
import { ShowViewHistoryAdminComponent } from './view-history-admin/show-view-history-admin/show-view-history-admin.component';
import { ViewHistoryDetailAdminComponent } from './view-history-admin/view-history-detail-admin/view-history-detail-admin.component';
import { SearchPhoneComponent } from './view-history/search-phone/search-phone.component';
import { EditExcelComponent } from './header-admin/edit-excel/edit-excel.component';
import { PreparationComponent } from './view-history-admin/show-view-history-admin/preparation/preparation.component';
import { ProcessedComponent } from './view-history-admin/show-view-history-admin/processed/processed.component';
import { FinishComponent } from './view-history-admin/show-view-history-admin/finish/finish.component';
import { CancelComponent } from './view-history-admin/show-view-history-admin/cancel/cancel.component';
import { ShowTabComponent } from './view-history-admin/show-view-history-admin/show-tab/show-tab.component';
import { UpdateWardComponent } from './header-admin/update-ward/update-ward.component';
import { JwtModule  } from '@auth0/angular-jwt';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { WindowService } from './service/window.service';
import { SellerComponent } from './seller/seller.component';
import { AddProductComponent } from './seller/add-product/add-product.component';
import { environment } from 'src/environments/environment';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { ShowShoppingDetailComponent } from './shopping/show-shopping-detail/show-shopping-detail.component';
import { SearchSellerComponent } from './shopping/search-seller/search-seller.component';
import { ViewListSellerComponent } from './shopping/view-list-seller/view-list-seller.component';
import { ContractManagerComponent } from './header-admin/contract-manager/contract-manager.component';
import { FinishContractComponent } from './header-admin/contract-manager/finish-contract/finish-contract.component';
import { PrepareContractComponent } from './header-admin/contract-manager/prepare-contract/prepare-contract.component';
import { RejectContractComponent } from './header-admin/contract-manager/reject-contract/reject-contract.component';
import { ShowProductComponent } from './seller/show-product/show-product.component';
import { UpdateProductComponent } from './seller/update-product/update-product.component';
import { FeedbackComponent } from './view-history/feedback/feedback.component';
import { VnpayReturnComponent } from './shopping-cart/vnpay-return/vnpay-return.component';
import { InfomationVnpayComponent } from './shopping-cart/infomation-vnpay/infomation-vnpay.component';
import { CofirmInfomationComponent } from './shopping-cart/cofirm-infomation/cofirm-infomation.component';
import { AddPromotionComponent } from './seller/add-promotion/add-promotion.component';
import { ViewHistorySellerComponent } from './view-history-seller/view-history-seller.component';
import { ViewHistoryDetailSellerComponent } from './view-history-seller/view-history-detail-seller/view-history-detail-seller.component';
import { ShowViewHistorySellerComponent } from './view-history-seller/show-view-history-seller/show-view-history-seller.component';
import { ShowTabSellerComponent } from './view-history-seller/show-view-history-seller/show-tab-seller/show-tab-seller.component';
import { ProcessedSellerComponent } from './view-history-seller/show-view-history-seller/processed-seller/processed-seller.component';
import { PreparationSellerComponent } from './view-history-seller/show-view-history-seller/preparation-seller/preparation-seller.component';
import { FinishSellerComponent } from './view-history-seller/show-view-history-seller/finish-seller/finish-seller.component';
import { CancelSellerComponent } from './view-history-seller/show-view-history-seller/cancel-seller/cancel-seller.component';
import { SellerRegistrationComponent } from './seller/seller-registration/seller-registration.component';
import { ChangePasswordComponent } from './seller/change-password/change-password.component';
import { UpdateSellerComponent } from './seller/update-seller/update-seller.component';
import { ShowPromotionComponent } from './seller/show-promotion/show-promotion.component';
import { HeaderAdminFBComponent } from './header-admin-fb/header-admin-fb.component';
import { ChoosePromotionComponent } from './seller/choose-promotion/choose-promotion.component';
import { ShowFeedbackComponent } from './header-admin-fb/show-feedback/show-feedback.component';
import { FinishFeedbackComponent } from './header-admin-fb/show-feedback/finish-feedback/finish-feedback.component';
import { PrepareFeedbackComponent } from './header-admin-fb/show-feedback/prepare-feedback/prepare-feedback.component';
import { RejectFeedbackComponent } from './header-admin-fb/show-feedback/reject-feedback/reject-feedback.component';
import { InformationFeedbackComponent } from './header-admin-fb/show-feedback/information-feedback/information-feedback.component';
import { InformationContractComponent } from './header-admin/contract-manager/information-contract/information-contract.component';
import { InformationPrepareComponent } from './header-admin/contract-manager/prepare-contract/information-prepare/information-prepare.component';
import { InfomationPrepareFeedbackComponent } from './header-admin-fb/show-feedback/prepare-feedback/infomation-prepare-feedback/infomation-prepare-feedback.component';
import { ProcessedFeedbackComponent } from './header-admin-fb/show-feedback/processed-feedback/processed-feedback.component';
import { InformationProcessedFeedbackComponent } from './header-admin-fb/show-feedback/processed-feedback/information-processed-feedback/information-processed-feedback.component';
import { ShowFeedbackSellerComponent } from './seller/show-feedback-seller/show-feedback-seller.component';
import { FeedbackDoneSellerComponent } from './seller/show-feedback-seller/feedback-done-seller/feedback-done-seller.component';
import { FeedbackProcessingSellerComponent } from './seller/show-feedback-seller/feedback-processing-seller/feedback-processing-seller.component';
import { InformationFeedbackSellerComponent } from './seller/show-feedback-seller/information-feedback-seller/information-feedback-seller.component';
import { SuccessRegistrationComponent } from './seller/seller-registration/success-registration/success-registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NetworkInterceptor } from './service/network.interceptor';
import { CashReturnComponent } from './shopping-cart/cash-return/cash-return.component';
import { UpdatePromotionComponent } from './seller/update-promotion/update-promotion.component';
import { ShippingComponent } from './seller/shipping/shipping.component';
import { CodeOtpComponent } from './view-history/code-otp/code-otp.component';
import { NgOtpInputModule } from 'ng-otp-input';
import { ShowViewHistoryPrepareUserComponent } from './view-history/show-view-history/show-view-history-prepare-user/show-view-history-prepare-user.component';
import { ShowViewHistoryProcessedUserComponent } from './view-history/show-view-history/show-view-history-processed-user/show-view-history-processed-user.component';
import { ShowViewHistoryFinishUserComponent } from './view-history/show-view-history/show-view-history-finish-user/show-view-history-finish-user.component';
import { ShowViewHistoryCancelUserComponent } from './view-history/show-view-history/show-view-history-cancel-user/show-view-history-cancel-user.component';
import { ShowViewHistoryFeedbackUserComponent } from './view-history/show-view-history/show-view-history-feedback-user/show-view-history-feedback-user.component';
import { CodeOtpSellerComponent } from './seller/code-otp-seller/code-otp-seller.component';
import { PhoneNumberSellerComponent } from './seller/phone-number-seller/phone-number-seller.component';
import { PhoneNumberCustomerComponent } from './shopping-cart/phone-number-customer/phone-number-customer.component';
import { CodeOtpCustomerComponent } from './shopping-cart/code-otp-customer/code-otp-customer.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { FeedbackAdminComponent } from './view-history-admin/show-view-history-admin/feedback-admin/feedback-admin.component';
import { FeedbackSellerComponent } from './view-history-seller/show-view-history-seller/feedback-seller/feedback-seller.component';

import { CarouselModule } from 'ngx-owl-carousel-o';

import { MatCarouselModule } from '@ngmodule/material-carousel';

import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import {MatDialogModule} from '@angular/material/dialog';
import { ShowProductsComponent } from './seller/show-product/show-products/show-products.component';
import { AuthorizedStoreComponent } from './header-admin/authorized-store/authorized-store.component';



export function tokenGetter(){
  return localStorage.getItem("jwt");
}


@NgModule({
  declarations: [
    AppComponent,
    ShoppingComponent,
    ShowShopingComponent,
    ShoppingCartComponent,
    MapComponent,
    HeaderComponent,
    FooterComponent,
    ViewHistoryComponent,
    ViewHistoryDetailComponent,
    AdminComponent,
    ShowShoppingCartComponent,
    InfomationComponent,
    HeaderAdminComponent,
    ShowViewHistoryComponent,
    ViewHistoryAdminComponent,
    ShowViewHistoryAdminComponent,
    ViewHistoryDetailAdminComponent,
    SearchPhoneComponent,
    EditExcelComponent,
    PreparationComponent,
    ProcessedComponent,
    FinishComponent,
    CancelComponent,
    ShowTabComponent,
    UpdateWardComponent,
    SellerComponent,
    AddProductComponent,
    ShowShoppingDetailComponent,
    SearchSellerComponent,
    ViewListSellerComponent,
    ContractManagerComponent,
    FinishContractComponent,
    PrepareContractComponent,
    RejectContractComponent,
    ShowProductComponent,
    UpdateProductComponent,
    FeedbackComponent,
    VnpayReturnComponent,
    InfomationVnpayComponent,
    CofirmInfomationComponent,
    AddPromotionComponent,
    ViewHistorySellerComponent,
    ViewHistoryDetailSellerComponent,
    ShowViewHistorySellerComponent,
    ShowTabSellerComponent,
    ProcessedSellerComponent,
    PreparationSellerComponent,
    FinishSellerComponent,
    CancelSellerComponent,
    SellerRegistrationComponent,
    ChangePasswordComponent,
    UpdateSellerComponent,
    ShowPromotionComponent,
    HeaderAdminFBComponent,
    ChoosePromotionComponent,
    // EditPromotionComponent,
    ShowFeedbackComponent,
    FinishFeedbackComponent,
    PrepareFeedbackComponent,
    RejectFeedbackComponent,
    InformationFeedbackComponent,
    InformationContractComponent,
    InformationPrepareComponent,
    InfomationPrepareFeedbackComponent,
    ProcessedFeedbackComponent,
    InformationProcessedFeedbackComponent,
    ShowFeedbackSellerComponent,
    FeedbackDoneSellerComponent,
    FeedbackProcessingSellerComponent,
    InformationFeedbackSellerComponent,
    SuccessRegistrationComponent,
    CashReturnComponent,
    UpdatePromotionComponent,
    ShippingComponent,
    CodeOtpComponent,
    ShowViewHistoryPrepareUserComponent,
    ShowViewHistoryProcessedUserComponent,
    ShowViewHistoryFinishUserComponent,
    ShowViewHistoryCancelUserComponent,
    ShowViewHistoryFeedbackUserComponent,
    CodeOtpSellerComponent,
    PhoneNumberSellerComponent,
    PhoneNumberCustomerComponent,
    CodeOtpCustomerComponent,
    FeedbackAdminComponent,
    FeedbackSellerComponent,
    ShowProductsComponent,
    AuthorizedStoreComponent,


  ],
  imports: [
    MatInputModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    NgOtpInputModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyABu2iYnTNKPkvL0sOzURpA0lMQ_1fNi3Q'
    }),
    JwtModule.forRoot({
      config:{
        tokenGetter:tokenGetter,
        allowedDomains:["localhost:4200"],
        disallowedRoutes:[]
      }
    }),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireStorageModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    CarouselModule,
    MatCarouselModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule
  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {floatLabel: 'always'}},
    {provide: HTTP_INTERCEPTORS,useClass: NetworkInterceptor,multi: true,},
    SharedService,
    WindowService,
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }
  ],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
