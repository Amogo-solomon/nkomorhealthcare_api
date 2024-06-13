/**
 * @swagger
 * components:
 *   schemas:
 *      refill_data:
 *          type: object
 *          properties:
 *              id:
 *                  type: string
 *                  description: the id of the refill data instance 
 *              order_number:
 *                  type: string
 *                  description: the order number of the refill data instance 
 *              medicine:
 *                  type: string
 *                  description: the medicine of the refill data instance 
 *              user_id:
 *                  type: string
 *                  description: the user_id of the refill data instance 
 *              email:
 *                  type: string
 *                  description: the email of the refill data instance 
 *              phone:
 *                  type: string
 *                  description: the phone of the refill data instance 
 *              image:
 *                  type: string
 *                  description: the image of the refill data instance 
 *              delivery_type:
 *                  type: string
 *                  description: the delivery type of the refill data instance 
 *              delivery_details:
 *                  type: string
 *                  description: the delivery details of the refill data instance 
 *              payment:
 *                  type: number
 *                  description: the payment of the refill data instance 
 *              payment_details:
 *                  type: string
 *                  description: the payment details of the refill data instance 
 *              a_price:
 *                  type: number
 *                  description: the a_price of the refill data instance 
 *              delivery_cost:
 *                  type: number
 *                  description: the delivery cost of the refill data instance 
 *              quantity:
 *                  type: string
 *                  description: the quantity of the refill data instance 
 *              delivery_status:
 *                  type: string
 *                  description: the delivery status of the refill data instance 
 *              tracking_id:
 *                  type: string
 *                  description: the tracking id of the refill data instance 
 *              time_in:
 *                  type: string
 *                  description: the time in of the refill data instance 
 *              refill_status:
 *                  type: string
 *                  description: the refill status of the refill data instance 
 *              refill_current_response_time:
 *                  type: string
 *                  description: the refill current response time of the refill data instance 
 *              payment_status:
 *                  type: string
 *                  description: the payment status of the refill data instance 
 *              payment_id:
 *                  type: string
 *                  description: the payment id of the refill data instance 
 *              payment_referrence:
 *                  type: string
 *                  description: the payment reference of the refill data instance 
 *              pay_time:
 *                  type: string
 *                  description: the pay time of the refill data instance 
 *              amount_paid:
 *                  type: number
 *                  description: the paid amount of the refill data instance 
 *              discount_name:
 *                  type: string
 *                  description: the discount name of the refill data instance 
 *              discount_amount:
 *                  type: number
 *                  description: the discount amount of the refill data instance 
 *              tra_code:
 *                  type: string
 *                  description: the tra code of the refill data instance 
 *              ref_code:
 *                  type: string
 *                  description: the ref code of the refill data instance 
 *              platform_charge:
 *                  type: number
 *                  description: the platform charge of the refill data instance 
 *              action:
 *                  type: number
 *                  description: the action of the refill data instance
 *          example:
 *              id: 140,
 *              order_number: 111-6276247-2500797,
 *              medicine: test,
 *              user_id: ,
 *              email: webanalyticsbdpro@gmail.com,
 *              phone: +1 05167732479,
 *              image: ,
 *              delivery_type: delivery,
 *              delivery_details: new york, new york, 10001,
 *              payment: 0,
 *              payment_details: ,
 *              a_price: 0,
 *              delivery_cost: 0,
 *              quantity: 3,
 *              delivery_status: Completed,
 *              tracking_id: 66445cf467944,
 *              time_in: 2024-05-15T06:57:56.000Z,
 *              refill_status: Completed,
 *              refill_current_response_time: 2024-06-07 09:09:23,
 *              payment_status: ,
 *              payment_id: ,
 *              payment_reference: ,
 *              pay_time: 2024-05-15T06:57:56.000Z,
 *              amount_payed: 0,
 *              discount_name: ,
 *              discount_amount: 0,
 *              tra_code: ,
 *              ref_code: ,
 *              platform_charge: 0,
 *              action: 1
 *      subscribers_data:
 *          type: object
 *          properties:
 *              id: 
 *                  type: number
 *                  description: id of the subscriber
 *              email:
 *                  type: string
 *                  email: email of the subscriber
 *              timein:
 *                  type: string
 *                  description: timein of the subscriber
 *          example:
 *              id: 13,
 *              email: testpro@gmail.com
 *              timein: 2024-05-15T06:51:40.000Z
 *      user_data:
 *          type: object
 *          properties:
 *              id:
 *                  type: number
 *                  description: id of the user data
 *              username:
 *                  type: string
 *                  description: username of the user data
 *              email:
 *                  type: string
 *                  description: email of the user data
 *              password:
 *                  type: string
 *                  description: password of the user data
 *              reg_complete:
 *                  type: number
 *                  description: reg complete of the user data
 *              firstname:
 *                  type: string
 *                  description: firstname of the user data
 *              lastname:
 *                  type: string
 *                  description: lastname of the user data
 *              address:
 *                  type: string
 *                  description: address of the user data
 *              phone:
 *                  type: string
 *                  description: phone of the user data
 *              town_name:
 *                  type: string
 *                  description: town name of the user data
 *              postalcode:
 *                  type: string
 *                  description: postal code of the user data
 *              date:
 *                  type: string
 *                  description: date of the user data
 *              profile_picture:
 *                  type: string
 *                  description: profile picture of the user data
 *              gender:
 *                  type: string
 *                  description: gender of the user data
 *              date_of_birth:
 *                  type: string
 *                  description: date of brith of the user data
 *              can_admin:
 *                  type: number
 *                  description: can admin of the user data
 *              privileges:
 *                  type: string
 *                  description: previlages of the user data
 *              timein:
 *                  type: string
 *                  description: timein of the user data
 *              action:
 *                  type: number
 *                  description: action of the user data
 *          example:
 *              id: 212,
 *              username: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9,
 *              email: g696607013@gmail.com,
 *              password: $2a$10$FE442EplDPsDHQImUzvAbeXKVPHdwhfRDPnzlIDQ0mtjTckM7KK72,
 *              reg_complete: 2,
 *              firstname: Viany,
 *              lastname: testing,
 *              address: ,
 *              phone: 6966070163,
 *              town_name: yaounde,
 *              postalcode: 8080,
 *              date: 2024-06-05T04:00:00.000Z,
 *              profile_picture: ,
 *              gender: ,
 *              date_of_birth: 0000-00-00,
 *              can_admin: 0,
 *              privileges: ,
 *              timein: 2024-06-05T19:05:46.000Z,
 *              action: 1
 *      bima_data:
 *          type: object
 *          properties:
 *              id: 
 *                  type: number
 *                  description: id of the bima
 *              email:
 *                  type: string
 *                  description: email of the bima
 *              firstname:
 *                  type: string
 *                  description: firstname of the bima
 *              lastname:
 *                  type: string
 *                  description: lastname of the bima
 *              age:
 *                  type: string
 *                  description: age of the bima
 *              mobile:
 *                  type: string
 *                  description: mobile of the bima
 *              package:
 *                  type: string
 *                  description: package of the bima
 *              action:
 *                  type: number
 *                  description: action of the bima
 *              delivery_status:
 *                  type: string
 *                  description: delivery status of the bima
 *              time_in:
 *                  type: string
 *                  description: timein of the bima
 *          example:
 *              id: 49,
 *              email: vafesif248@javnoi.com,
 *              firstName: Zack Zoe,
 *              lastName: ,
 *              age: 24,
 *              mobile: 0174358393,
 *              package: B-Care_Joint_Platinum_70cedis,
 *              action: 1,
 *              delivery_status: Pending,
 *              time_in: 2024-05-22T12:46:48.000Z
 *      paystack_data:
 *          type: object
 *          properties:
 *              id: 
 *                  type: number
 *                  description: id of the paystack data
 *              key_name:
 *                  type: string
 *                  description: key name of the paystack data
 *              pub_key:
 *                  type: string
 *                  description: pub_key of the paystack data
 *              secret_key:
 *                  type: string
 *                  description: secret key of the paystack data
 *              platform fee:
 *                  type: number
 *                  description: platform fee of the paystack data
 *              status:
 *                  type: number
 *                  description: status of the paystack data
 *          example:
 *              id: 2,
 *              key_name: live_key,
 *              pub_key: pk_live_c81c79b4b138c62c67425a76d69d7f0480f67455,
 *              secret_key: ,
 *              platform_fee: 0,
 *              status: 1
 *      coupon_data:
 *          type: object
 *          properties:
 *              id: 
 *                  type: number
 *                  description: id of the coupon data
 *              coupon:
 *                  type: string
 *                  description: coupon name
 *              amount:
 *                  type: number
 *                  description: amount of the coupon
 *              used_by:
 *                  type: string
 *                  description: used by of the coupon
 *              status:
 *                  type: number
 *                  description: status of the coupon
 *          example:
 *              id: 129,
 *              coupon: 36L9Y,
 *              amount: 5,
 *              used_by: ,
 *              status: 1
 *      contact_data:
 *          type: object
 *          properties:
 *              id: 
 *                  type: number
 *                  description: id of the contact data
 *              name:
 *                  type: string
 *                  description: name of the contact
 *              email:
 *                  type: number
 *                  description: email of the contact 
 *              phone:
 *                  type: string
 *                  description: phone of the contact
 *              message:
 *                  type: string
 *                  description: message of the contact 
 *              timein:
 *                  type: string
 *                  description: timein of the contact
 *          example:
 *              id: 27,
 *              name: test test,
 *              email: webanalyticsbdpro@gmail.com,
 *              phone: +1 05167732479,
 *              message: test,
 *              timein: 2024-05-17T11:04:32.000Z
 *      medicine_data:
 *          type: object
 *          properties:
 *              id: 
 *                  type: number
 *                  description: id of the medicine
 *              medicine:
 *                  type: string
 *                  description: name of the medicine
 *              price:
 *                  type: number
 *                  description: price of the medicine 
 *              currency:
 *                  type: string
 *                  description: currency of the medicine
 *              image:
 *                  type: string
 *                  description: image of the medicine 
 *              action:
 *                  type: number
 *                  description: action of the medicine
 *          example:
 *              id: 2,
 *              medicine: test_apromix,
 *              price: 30,
 *              currency: cedis,
 *              image: https://example.com,
 *              action: 1
 */

/**
 * @swagger
 * /api/admin/refill_data:
 *  get:
 *      summary: Returns a list of refill data
 *      responses:
 *          200:
 *              description: The list of refill data
 *              schema:
 *                  type: object
 *                  properties:
 *                      message:
 *                          type: string
 *                      data:
 *                          type: object
 *                          properties:
 *                              user:
 *                                  type: array
 *                                  items:
 *                                      $ref: '#/components/schemas/refill_data'
 *                      status:
 *                          type: string
 * /api/admin/subscribers_data:
 *  get:
 *      summary: Returns a list of subscribers data
 *      responses:
 *          200:
 *              description: The list of subscribers data
 *              schema:
 *                  type: object
 *                  properties:
 *                      message:
 *                          type: string
 *                      data:
 *                          type: object
 *                          properties:
 *                              user:
 *                                  type: array
 *                                  items:
 *                                      $ref: '#/components/schemas/subscribers_data'
 *                      status:
 *                          type: string
 * /api/admin/user_data:
 *  get:
 *      summary: Returns a list of users data
 *      responses:
 *          200:
 *              description: The list of users data
 *              schema:
 *                  type: object
 *                  properties:
 *                      message:
 *                          type: string
 *                      data:
 *                          type: object
 *                          properties:
 *                              user:
 *                                  type: array
 *                                  items:
 *                                      $ref: '#/components/schemas/user_data'
 *                      status:
 *                          type: string
 * /api/admin/admin_data:
 *  get:
 *      summary: Returns a list of admin data
 *      responses:
 *          200:
 *              description: The list of admin data
 *              schema:
 *                  type: object
 *                  properties:
 *                      message:
 *                          type: string
 *                      data:
 *                          type: object
 *                          properties:
 *                              user:
 *                                  type: array
 *                                  items:
 *                                      $ref: '#/components/schemas/user_data'
 *                      status:
 *                          type: string
 * /api/admin/bima_data:
 *  get:
 *      summary: Returns a list of bima data
 *      responses:
 *          200:
 *              description: The list of bima data
 *              schema:
 *                  type: object
 *                  properties:
 *                      message:
 *                          type: string
 *                      data:
 *                          type: object
 *                          properties:
 *                              user:
 *                                  type: array
 *                                  items:
 *                                      $ref: '#/components/schemas/bima_data'
 *                      status:
 *                          type: string
 * /api/admin/paystack_data:
 *  get:
 *      summary: Returns a list of paystack data
 *      responses:
 *          200:
 *              description: The list of paystack data
 *              schema:
 *                  type: object
 *                  properties:
 *                      message:
 *                          type: string
 *                      data:
 *                          type: object
 *                          properties:
 *                              user:
 *                                  type: array
 *                                  items:
 *                                      $ref: '#/components/schemas/paystack_data'
 *                      status:
 *                          type: string
 * /api/admin/coupon_data:
 *  get:
 *      summary: Returns a list of coupon data
 *      responses:
 *          200:
 *              description: The list of coupon data
 *              schema:
 *                  type: object
 *                  properties:
 *                      message:
 *                          type: string
 *                      data:
 *                          type: object
 *                          properties:
 *                              user:
 *                                  type: array
 *                                  items:
 *                                      $ref: '#/components/schemas/coupon_data'
 *                      status:
 *                          type: string
 * /api/admin/contact_data:
 *  get:
 *      summary: Returns a list of contact data
 *      responses:
 *          200:
 *              description: The list of contact data
 *              schema:
 *                  type: object
 *                  properties:
 *                      message:
 *                          type: string
 *                      data:
 *                          type: object
 *                          properties:
 *                              user:
 *                                  type: array
 *                                  items:
 *                                      $ref: '#/components/schemas/contact_data'
 *                      status:
 *                          type: string
 * /api/admin/get-medicine:
 *  get:
 *      summary: Returns a list of medicine data
 *      responses:
 *          200:
 *              description: The list of medicine data
 *              schema:
 *                  type: object
 *                  properties:
 *                      message:
 *                          type: string
 *                      data:
 *                          type: object
 *                          properties:
 *                              user:
 *                                  type: array
 *                                  items:
 *                                      $ref: '#/components/schemas/medicine_data'
 *                      status:
 *                          type: string
 * /api/admin/admin/login:
 *  post:
 *      summary: Performs admin login
 *      requestBody:
 *          required: true
 *          content:    
 *              applcation/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          email:
 *                              type: string
 *                          password: 
 *                              type: string
 *      responses:
 *          201:
 *              description: Login Successfull
 * /api/admin/promo-code:
 *  post:
 *      summary: Create Promo Code
 *      requestBody:
 *          required: true
 *          content:    
 *              applcation/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          promoCode:
 *                              type: string
 *                          amount: 
 *                              type: number
 *      responses:
 *          201:
 *              description: Promo code created
 * /api/admin/store-medicine:
 *  post:
 *      summary: Create store medicine
 *      requestBody:
 *          required: true
 *          content:    
 *              applcation/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          medicineName:
 *                              type: string
 *                          amount: 
 *                              type: number
 *                          image:
 *                              type: string
 *      responses:
 *          201:
 *              description: Store medicine saved
 * /api/admin/delete-promo-code:
 *  post:
 *      summary: Delete Promo Code
 *      requestBody:
 *          required: true
 *          content:    
 *              applcation/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          promoCode:
 *                              type: string
 *      responses:
 *          201:
 *              description: Promo Code Deleted
 * /api/admin/delete-user-db:
 *  post:
 *      summary: Delete User
 *      requestBody:
 *          required: true
 *          content:    
 *              applcation/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          email:
 *                              type: string
 *      responses:
 *          201:
 *              description: User deleted from db
 * /api/admin/delete-medicine:
 *  post:
 *      summary: Dekete medicine
 *      requestBody:
 *          required: true
 *          content:    
 *              applcation/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          id:
 *                              type: number
 *      responses:
 *          201:
 *              description: Medicine deleted successfully
 * /api/admin/make-admin:
 *  post:
 *      summary: Make admin
 *      requestBody:
 *          required: true
 *          content:    
 *              applcation/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          email:
 *                              type: string
 *                          privileges: 
 *                              type: string
 *      responses:
 *          201:
 *              description: Admin role assigned to user
 * /api/admin/revoke-access:
 *  post:
 *      summary: Revoke Access
 *      requestBody:
 *          required: true
 *          content:    
 *              applcation/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          email:
 *                              type: string
 *      responses:
 *          201:
 *              description: Previlages Revoked successfully
 * /api/users/register-admin:
 *  post:
 *      summary: Register admin
 *      requestBody:
 *          required: true
 *          content:    
 *              applcation/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          email:
 *                              type: string
 *                          password: 
 *                              type: string
 *                          firstname:
 *                              type: string
 *                          lastname: 
 *                              type: string
 *      responses:
 *          201:
 *              description: Admin registered successfully
 * /api/users/remove-admin:
 *  post:
 *      summary: Remove Admin
 *      requestBody:
 *          required: true
 *          content:    
 *              applcation/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          email:
 *                              type: string
 *      responses:
 *          201:
 *              description: Admin removed successfully
 * /api/admin/validate-insurance:
 *  post:
 *      summary: Validate Insurance
 *      requestBody:
 *          required: true
 *          content:    
 *              applcation/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          id:
 *                              type: number
 *      responses:
 *          201:
 *              description: Insurance validated successfully
 * /api/admin/resend-account-link:
 *  post:
 *      summary: Validate account
 *      requestBody:
 *          required: true
 *          content:    
 *              applcation/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          email:
 *                              type: string
 *                          app: 
 *                              type: string
 *      responses:
 *          201:
 *              description: Account link resent successfully
 * /api/partner/lab/refill/data/${email}:
 *  get:
 *      security:
 *      -   bearerAuth: []
 *      summary: Refill Data
 *      parameters:
 *          -   in: path
 *              name: email
 *              schema:
 *                  type: string
 *              required: true
 *              description: email of the user
 *      responses:
 *          200:
 *              description: Partner refill data retrieved successfully
 * /api/users/get-api-keys/${email}:
 *  get:
 *      security:
 *      -   bearerAuth: []
 *      summary: Get API keys
 *      parameters:
 *          -   in: path
 *              name: email
 *              schema:
 *                  type: string
 *              required: true
 *              description: email of the user
 *      responses:
 *          200:
 *              description: API keys retrieved successfully
 * /api/partner/test/lab-service/get-data/${email}:
 *  get:
 *      security:
 *      -   bearerAuth: []
 *      summary: Get API keys
 *      parameters:
 *          -   in: path
 *              name: email
 *              schema:
 *                  type: string
 *              required: true
 *              description: email of the user
 *      responses:
 *          200:
 *              description: Lab data retrieved successfully
 * /api/partner/lab/refill/submit/:
 *  post:
 *      security:
 *      -   bearerAuth: []
 *      summary: Submit Refill data
 *      requestBody:
 *          required: true
 *          content:    
 *              applcation/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          firstname:
 *                              type: string
 *                          lastname:
 *                              type: string
 *                          email:
 *                              type: string
 *                          phone: 
 *                              type: string
 *                          deliveryType:
 *                              type: string
 *                          deliveryDetails:
 *                              type: string
 *                          image:
 *                              type: string
 *                          medicineName:
 *                              type: string
 *                          strengthVal:
 *                              type: string
 *                          strengthUnit:
 *                              type: string
 *                          drugQuantity:
 *                              type: string
 *      responses:
 *          201:
 *              description: Lab refill submitted successfully
 * /api/users/verify-coupon:
 *  post:
 *      security:
 *      -   bearerAuth: []
 *      summary: Verify Coupon
 *      requestBody:
 *          required: true
 *          content:    
 *              applcation/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          email:
 *                              type: string
 *                          coupon: 
 *                              type: string
 *      responses:
 *          201:
 *              description: Coupon verified successfully
 * /api/partner/lab/refill/payment:
 *  post:
 *      security:
 *      -   bearerAuth: []
 *      summary: Refill payment
 *      requestBody:
 *          required: true
 *          content:    
 *              applcation/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          tracking_id:
 *                              type: string
 *                          reference: 
 *                              type: string
 *                          discount_name:
 *                              type: string
 *                          discount_amount:
 *                              type: number
 *      responses:
 *          201:
 *              description: Payment Refilled successfully
 * /api/partner/test/lab-service/store-payment:
 *  post:
 *      security:
 *      -   bearerAuth: []
 *      summary: Store payment
 *      requestBody:
 *          required: true
 *          content:    
 *              applcation/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          reference:
 *                              type: string
 *                          status: 
 *                              type: string
 *                          promoCode:
 *                              type: string
 *                          discount_amount:
 *                              type: number
 *                          orderNumber:
 *                              type: string
 *      responses:
 *          201:
 *              description: Payment Stored successfully
 * /api/partner/test/lab-service/submit:
 *  post:
 *      security:
 *      -   bearerAuth: []
 *      summary: Submit lab service
 *      requestBody:
 *          required: true
 *          content:    
 *              applcation/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          facility:
 *                              type: string
 *                          serviceName: 
 *                              type: string
 *                          labLocation:
 *                              type: string
 *                          dateTime:
 *                              type: string
 *                          tests:
 *                              type: string
 *                          price: 
 *                              type: number
 *                          discount: 
 *                              type: number
 *                          deliveryDetails:
 *                              properties:
 *                                  streetAddress:
 *                                      type: string
 *                                  townName:
 *                                      type: string
 *                                  ghanaPostAddress:
 *                                      type: string
 *                                  phoneNumber:
 *                                      type: string
 *                          userEmail:
 *                              type: string
 *      responses:
 *          201:
 *              description: Lab service submitted successfully
 */