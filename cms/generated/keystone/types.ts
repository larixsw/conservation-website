/* eslint-disable */

export type UserWhereUniqueInput = {
  readonly id?: string | null
  readonly email?: string | null
}

export type UserWhereInput = {
  readonly AND?: ReadonlyArray<UserWhereInput> | UserWhereInput | null
  readonly OR?: ReadonlyArray<UserWhereInput> | UserWhereInput | null
  readonly NOT?: ReadonlyArray<UserWhereInput> | UserWhereInput | null
  readonly id?: IDFilter | null
  readonly name?: StringFilter | null
  readonly email?: StringFilter | null
  readonly createdAt?: DateTimeNullableFilter | null
  readonly isAdmin?: BooleanFilter | null
}

export type IDFilter = {
  readonly equals?: string | null
  readonly in?: ReadonlyArray<string> | string | null
  readonly notIn?: ReadonlyArray<string> | string | null
  readonly lt?: string | null
  readonly lte?: string | null
  readonly gt?: string | null
  readonly gte?: string | null
  readonly not?: IDFilter | null
}

export type StringFilter = {
  readonly equals?: string | null
  readonly in?: ReadonlyArray<string> | string | null
  readonly notIn?: ReadonlyArray<string> | string | null
  readonly lt?: string | null
  readonly lte?: string | null
  readonly gt?: string | null
  readonly gte?: string | null
  readonly contains?: string | null
  readonly startsWith?: string | null
  readonly endsWith?: string | null
  readonly not?: NestedStringFilter | null
}

export type NestedStringFilter = {
  readonly equals?: string | null
  readonly in?: ReadonlyArray<string> | string | null
  readonly notIn?: ReadonlyArray<string> | string | null
  readonly lt?: string | null
  readonly lte?: string | null
  readonly gt?: string | null
  readonly gte?: string | null
  readonly contains?: string | null
  readonly startsWith?: string | null
  readonly endsWith?: string | null
  readonly not?: NestedStringFilter | null
}

export type DateTimeNullableFilter = {
  readonly equals?: any | null
  readonly in?: ReadonlyArray<any> | any | null
  readonly notIn?: ReadonlyArray<any> | any | null
  readonly lt?: any | null
  readonly lte?: any | null
  readonly gt?: any | null
  readonly gte?: any | null
  readonly not?: DateTimeNullableFilter | null
}

export type BooleanFilter = {
  readonly equals?: boolean | null
  readonly not?: BooleanFilter | null
}

export type UserOrderByInput = {
  readonly id?: OrderDirection | null
  readonly name?: OrderDirection | null
  readonly email?: OrderDirection | null
  readonly createdAt?: OrderDirection | null
  readonly isAdmin?: OrderDirection | null
}

export type OrderDirection =
  | 'asc'
  | 'desc'

export type UserUpdateInput = {
  readonly name?: string | null
  readonly email?: string | null
  readonly password?: string | null
  readonly createdAt?: any | null
  readonly isAdmin?: boolean | null
}

export type UserUpdateArgs = {
  readonly where: UserWhereUniqueInput
  readonly data: UserUpdateInput
}

export type UserCreateInput = {
  readonly name?: string | null
  readonly email?: string | null
  readonly password?: string | null
  readonly createdAt?: any | null
  readonly isAdmin?: boolean | null
}

export type AnnouncementWhereUniqueInput = {
  readonly id?: string | null
}

export type AnnouncementWhereInput = {
  readonly AND?: ReadonlyArray<AnnouncementWhereInput> | AnnouncementWhereInput | null
  readonly OR?: ReadonlyArray<AnnouncementWhereInput> | AnnouncementWhereInput | null
  readonly NOT?: ReadonlyArray<AnnouncementWhereInput> | AnnouncementWhereInput | null
  readonly id?: IDFilter | null
  readonly text?: StringFilter | null
  readonly colour?: StringFilter | null
  readonly active?: BooleanFilter | null
}

export type AnnouncementOrderByInput = {
  readonly id?: OrderDirection | null
  readonly text?: OrderDirection | null
  readonly colour?: OrderDirection | null
  readonly active?: OrderDirection | null
}

export type AnnouncementUpdateInput = {
  readonly text?: string | null
  readonly colour?: string | null
  readonly active?: boolean | null
}

export type AnnouncementUpdateArgs = {
  readonly where: AnnouncementWhereUniqueInput
  readonly data: AnnouncementUpdateInput
}

export type AnnouncementCreateInput = {
  readonly text?: string | null
  readonly colour?: string | null
  readonly active?: boolean | null
}

export type AboutWhereUniqueInput = {
  readonly id?: string | null
}

export type AboutWhereInput = {
  readonly AND?: ReadonlyArray<AboutWhereInput> | AboutWhereInput | null
  readonly OR?: ReadonlyArray<AboutWhereInput> | AboutWhereInput | null
  readonly NOT?: ReadonlyArray<AboutWhereInput> | AboutWhereInput | null
  readonly id?: IDFilter | null
}

export type AboutOrderByInput = {
  readonly id?: OrderDirection | null
}

export type AboutUpdateInput = {
  readonly content?: import('@keystone-6/core/types').JSONValue | null
}

export type AboutUpdateArgs = {
  readonly where: AboutWhereUniqueInput
  readonly data: AboutUpdateInput
}

export type AboutCreateInput = {
  readonly content?: import('@keystone-6/core/types').JSONValue | null
}

export type ImageExtension =
  | 'jpg'
  | 'png'
  | 'webp'
  | 'gif'

export type BurialWhereUniqueInput = {
  readonly id?: string | null
}

export type BurialWhereInput = {
  readonly AND?: ReadonlyArray<BurialWhereInput> | BurialWhereInput | null
  readonly OR?: ReadonlyArray<BurialWhereInput> | BurialWhereInput | null
  readonly NOT?: ReadonlyArray<BurialWhereInput> | BurialWhereInput | null
  readonly id?: IDFilter | null
}

export type BurialOrderByInput = {
  readonly id?: OrderDirection | null
}

export type BurialUpdateInput = {
  readonly image?: ImageFieldInput | null
  readonly content?: import('@keystone-6/core/types').JSONValue | null
}

export type ImageFieldInput = {
  readonly upload: any
}

export type BurialUpdateArgs = {
  readonly where: BurialWhereUniqueInput
  readonly data: BurialUpdateInput
}

export type BurialCreateInput = {
  readonly image?: ImageFieldInput | null
  readonly content?: import('@keystone-6/core/types').JSONValue | null
}

export type FeedbackWhereUniqueInput = {
  readonly id?: string | null
}

export type FeedbackWhereInput = {
  readonly AND?: ReadonlyArray<FeedbackWhereInput> | FeedbackWhereInput | null
  readonly OR?: ReadonlyArray<FeedbackWhereInput> | FeedbackWhereInput | null
  readonly NOT?: ReadonlyArray<FeedbackWhereInput> | FeedbackWhereInput | null
  readonly id?: IDFilter | null
}

export type FeedbackOrderByInput = {
  readonly id?: OrderDirection | null
}

export type FeedbackUpdateInput = {
  readonly image?: ImageFieldInput | null
  readonly content?: import('@keystone-6/core/types').JSONValue | null
}

export type FeedbackUpdateArgs = {
  readonly where: FeedbackWhereUniqueInput
  readonly data: FeedbackUpdateInput
}

export type FeedbackCreateInput = {
  readonly image?: ImageFieldInput | null
  readonly content?: import('@keystone-6/core/types').JSONValue | null
}

export type FooterWhereUniqueInput = {
  readonly id?: string | null
}

export type FooterWhereInput = {
  readonly AND?: ReadonlyArray<FooterWhereInput> | FooterWhereInput | null
  readonly OR?: ReadonlyArray<FooterWhereInput> | FooterWhereInput | null
  readonly NOT?: ReadonlyArray<FooterWhereInput> | FooterWhereInput | null
  readonly id?: IDFilter | null
  readonly address?: StringFilter | null
  readonly phone?: StringFilter | null
  readonly instagramHandle?: StringFilter | null
  readonly facebookHandle?: StringFilter | null
}

export type FooterOrderByInput = {
  readonly id?: OrderDirection | null
  readonly address?: OrderDirection | null
  readonly phone?: OrderDirection | null
  readonly instagramHandle?: OrderDirection | null
  readonly facebookHandle?: OrderDirection | null
}

export type FooterUpdateInput = {
  readonly address?: string | null
  readonly phone?: string | null
  readonly instagramHandle?: string | null
  readonly facebookHandle?: string | null
}

export type FooterUpdateArgs = {
  readonly where: FooterWhereUniqueInput
  readonly data: FooterUpdateInput
}

export type FooterCreateInput = {
  readonly address?: string | null
  readonly phone?: string | null
  readonly instagramHandle?: string | null
  readonly facebookHandle?: string | null
}

export type GalleryTagWhereUniqueInput = {
  readonly id?: string | null
}

export type GalleryTagWhereInput = {
  readonly AND?: ReadonlyArray<GalleryTagWhereInput> | GalleryTagWhereInput | null
  readonly OR?: ReadonlyArray<GalleryTagWhereInput> | GalleryTagWhereInput | null
  readonly NOT?: ReadonlyArray<GalleryTagWhereInput> | GalleryTagWhereInput | null
  readonly id?: IDFilter | null
  readonly tagName?: StringFilter | null
}

export type GalleryTagOrderByInput = {
  readonly id?: OrderDirection | null
  readonly tagName?: OrderDirection | null
}

export type GalleryTagUpdateInput = {
  readonly tagName?: string | null
}

export type GalleryTagUpdateArgs = {
  readonly where: GalleryTagWhereUniqueInput
  readonly data: GalleryTagUpdateInput
}

export type GalleryTagCreateInput = {
  readonly tagName?: string | null
}

export type GalleryImageWhereUniqueInput = {
  readonly id?: string | null
}

export type GalleryImageWhereInput = {
  readonly AND?: ReadonlyArray<GalleryImageWhereInput> | GalleryImageWhereInput | null
  readonly OR?: ReadonlyArray<GalleryImageWhereInput> | GalleryImageWhereInput | null
  readonly NOT?: ReadonlyArray<GalleryImageWhereInput> | GalleryImageWhereInput | null
  readonly id?: IDFilter | null
  readonly caption?: StringFilter | null
  readonly author?: StringFilter | null
  readonly dateTaken?: CalendarDayFilter | null
  readonly tags?: GalleryTagManyRelationFilter | null
}

export type CalendarDayFilter = {
  readonly equals?: any | null
  readonly in?: ReadonlyArray<any> | any | null
  readonly notIn?: ReadonlyArray<any> | any | null
  readonly lt?: any | null
  readonly lte?: any | null
  readonly gt?: any | null
  readonly gte?: any | null
  readonly not?: CalendarDayFilter | null
}

export type GalleryTagManyRelationFilter = {
  readonly every?: GalleryTagWhereInput | null
  readonly some?: GalleryTagWhereInput | null
  readonly none?: GalleryTagWhereInput | null
}

export type GalleryImageOrderByInput = {
  readonly id?: OrderDirection | null
  readonly caption?: OrderDirection | null
  readonly author?: OrderDirection | null
  readonly dateTaken?: OrderDirection | null
}

export type GalleryImageUpdateInput = {
  readonly image?: ImageFieldInput | null
  readonly caption?: string | null
  readonly author?: string | null
  readonly dateTaken?: any | null
  readonly tags?: GalleryTagRelateToManyForUpdateInput | null
}

export type GalleryTagRelateToManyForUpdateInput = {
  readonly disconnect?: ReadonlyArray<GalleryTagWhereUniqueInput> | GalleryTagWhereUniqueInput | null
  readonly set?: ReadonlyArray<GalleryTagWhereUniqueInput> | GalleryTagWhereUniqueInput | null
  readonly create?: ReadonlyArray<GalleryTagCreateInput> | GalleryTagCreateInput | null
  readonly connect?: ReadonlyArray<GalleryTagWhereUniqueInput> | GalleryTagWhereUniqueInput | null
}

export type GalleryImageUpdateArgs = {
  readonly where: GalleryImageWhereUniqueInput
  readonly data: GalleryImageUpdateInput
}

export type GalleryImageCreateInput = {
  readonly image?: ImageFieldInput | null
  readonly caption?: string | null
  readonly author?: string | null
  readonly dateTaken?: any | null
  readonly tags?: GalleryTagRelateToManyForCreateInput | null
}

export type GalleryTagRelateToManyForCreateInput = {
  readonly create?: ReadonlyArray<GalleryTagCreateInput> | GalleryTagCreateInput | null
  readonly connect?: ReadonlyArray<GalleryTagWhereUniqueInput> | GalleryTagWhereUniqueInput | null
  readonly set?: ReadonlyArray<GalleryTagWhereUniqueInput> | GalleryTagWhereUniqueInput | null
}

export type TrailPageWhereUniqueInput = {
  readonly id?: string | null
}

export type TrailPageWhereInput = {
  readonly AND?: ReadonlyArray<TrailPageWhereInput> | TrailPageWhereInput | null
  readonly OR?: ReadonlyArray<TrailPageWhereInput> | TrailPageWhereInput | null
  readonly NOT?: ReadonlyArray<TrailPageWhereInput> | TrailPageWhereInput | null
  readonly id?: IDFilter | null
}

export type TrailPageOrderByInput = {
  readonly id?: OrderDirection | null
}

export type TrailPageUpdateInput = {
  readonly content?: import('@keystone-6/core/types').JSONValue | null
}

export type TrailPageUpdateArgs = {
  readonly where: TrailPageWhereUniqueInput
  readonly data: TrailPageUpdateInput
}

export type TrailPageCreateInput = {
  readonly content?: import('@keystone-6/core/types').JSONValue | null
}

export type TrailWhereUniqueInput = {
  readonly id?: string | null
}

export type TrailWhereInput = {
  readonly AND?: ReadonlyArray<TrailWhereInput> | TrailWhereInput | null
  readonly OR?: ReadonlyArray<TrailWhereInput> | TrailWhereInput | null
  readonly NOT?: ReadonlyArray<TrailWhereInput> | TrailWhereInput | null
  readonly id?: IDFilter | null
  readonly name?: StringFilter | null
  readonly length?: FloatFilter | null
  readonly elevationGain?: FloatFilter | null
  readonly difficulty?: StringFilter | null
  readonly trailCoords?: StringFilter | null
  readonly colour?: StringFilter | null
}

export type FloatFilter = {
  readonly equals?: number | null
  readonly in?: ReadonlyArray<number> | number | null
  readonly notIn?: ReadonlyArray<number> | number | null
  readonly lt?: number | null
  readonly lte?: number | null
  readonly gt?: number | null
  readonly gte?: number | null
  readonly not?: FloatFilter | null
}

export type TrailOrderByInput = {
  readonly id?: OrderDirection | null
  readonly name?: OrderDirection | null
  readonly length?: OrderDirection | null
  readonly elevationGain?: OrderDirection | null
  readonly difficulty?: OrderDirection | null
  readonly trailCoords?: OrderDirection | null
  readonly colour?: OrderDirection | null
}

export type TrailUpdateInput = {
  readonly name?: string | null
  readonly image?: ImageFieldInput | null
  readonly length?: number | null
  readonly elevationGain?: number | null
  readonly difficulty?: string | null
  readonly description?: import('@keystone-6/core/types').JSONValue | null
  readonly trailCoords?: string | null
  readonly colour?: string | null
}

export type TrailUpdateArgs = {
  readonly where: TrailWhereUniqueInput
  readonly data: TrailUpdateInput
}

export type TrailCreateInput = {
  readonly name?: string | null
  readonly image?: ImageFieldInput | null
  readonly length?: number | null
  readonly elevationGain?: number | null
  readonly difficulty?: string | null
  readonly description?: import('@keystone-6/core/types').JSONValue | null
  readonly trailCoords?: string | null
  readonly colour?: string | null
}

export type MapWhereUniqueInput = {
  readonly id?: string | null
}

export type MapWhereInput = {
  readonly AND?: ReadonlyArray<MapWhereInput> | MapWhereInput | null
  readonly OR?: ReadonlyArray<MapWhereInput> | MapWhereInput | null
  readonly NOT?: ReadonlyArray<MapWhereInput> | MapWhereInput | null
  readonly id?: IDFilter | null
  readonly centreCoords?: StringFilter | null
  readonly zoom?: IntFilter | null
}

export type IntFilter = {
  readonly equals?: number | null
  readonly in?: ReadonlyArray<number> | number | null
  readonly notIn?: ReadonlyArray<number> | number | null
  readonly lt?: number | null
  readonly lte?: number | null
  readonly gt?: number | null
  readonly gte?: number | null
  readonly not?: IntFilter | null
}

export type MapOrderByInput = {
  readonly id?: OrderDirection | null
  readonly centreCoords?: OrderDirection | null
  readonly zoom?: OrderDirection | null
}

export type MapUpdateInput = {
  readonly centreCoords?: string | null
  readonly zoom?: number | null
}

export type MapUpdateArgs = {
  readonly where: MapWhereUniqueInput
  readonly data: MapUpdateInput
}

export type MapCreateInput = {
  readonly centreCoords?: string | null
  readonly zoom?: number | null
}

export type PrivacyWhereUniqueInput = {
  readonly id?: string | null
}

export type PrivacyWhereInput = {
  readonly AND?: ReadonlyArray<PrivacyWhereInput> | PrivacyWhereInput | null
  readonly OR?: ReadonlyArray<PrivacyWhereInput> | PrivacyWhereInput | null
  readonly NOT?: ReadonlyArray<PrivacyWhereInput> | PrivacyWhereInput | null
  readonly id?: IDFilter | null
}

export type PrivacyOrderByInput = {
  readonly id?: OrderDirection | null
}

export type PrivacyUpdateInput = {
  readonly content?: import('@keystone-6/core/types').JSONValue | null
}

export type PrivacyUpdateArgs = {
  readonly where: PrivacyWhereUniqueInput
  readonly data: PrivacyUpdateInput
}

export type PrivacyCreateInput = {
  readonly content?: import('@keystone-6/core/types').JSONValue | null
}

export type DisclaimerWhereUniqueInput = {
  readonly id?: string | null
}

export type DisclaimerWhereInput = {
  readonly AND?: ReadonlyArray<DisclaimerWhereInput> | DisclaimerWhereInput | null
  readonly OR?: ReadonlyArray<DisclaimerWhereInput> | DisclaimerWhereInput | null
  readonly NOT?: ReadonlyArray<DisclaimerWhereInput> | DisclaimerWhereInput | null
  readonly id?: IDFilter | null
}

export type DisclaimerOrderByInput = {
  readonly id?: OrderDirection | null
}

export type DisclaimerUpdateInput = {
  readonly content?: import('@keystone-6/core/types').JSONValue | null
}

export type DisclaimerUpdateArgs = {
  readonly where: DisclaimerWhereUniqueInput
  readonly data: DisclaimerUpdateInput
}

export type DisclaimerCreateInput = {
  readonly content?: import('@keystone-6/core/types').JSONValue | null
}

export type ProductsServicesPageWhereUniqueInput = {
  readonly id?: string | null
}

export type ProductsServicesPageWhereInput = {
  readonly AND?: ReadonlyArray<ProductsServicesPageWhereInput> | ProductsServicesPageWhereInput | null
  readonly OR?: ReadonlyArray<ProductsServicesPageWhereInput> | ProductsServicesPageWhereInput | null
  readonly NOT?: ReadonlyArray<ProductsServicesPageWhereInput> | ProductsServicesPageWhereInput | null
  readonly id?: IDFilter | null
}

export type ProductsServicesPageOrderByInput = {
  readonly id?: OrderDirection | null
}

export type ProductsServicesPageUpdateInput = {
  readonly content?: import('@keystone-6/core/types').JSONValue | null
}

export type ProductsServicesPageUpdateArgs = {
  readonly where: ProductsServicesPageWhereUniqueInput
  readonly data: ProductsServicesPageUpdateInput
}

export type ProductsServicesPageCreateInput = {
  readonly content?: import('@keystone-6/core/types').JSONValue | null
}

export type ProductWhereUniqueInput = {
  readonly id?: string | null
}

export type ProductWhereInput = {
  readonly AND?: ReadonlyArray<ProductWhereInput> | ProductWhereInput | null
  readonly OR?: ReadonlyArray<ProductWhereInput> | ProductWhereInput | null
  readonly NOT?: ReadonlyArray<ProductWhereInput> | ProductWhereInput | null
  readonly id?: IDFilter | null
  readonly title?: StringFilter | null
  readonly urlId?: StringFilter | null
  readonly isService?: BooleanFilter | null
  readonly source?: StringFilter | null
}

export type ProductOrderByInput = {
  readonly id?: OrderDirection | null
  readonly title?: OrderDirection | null
  readonly urlId?: OrderDirection | null
  readonly isService?: OrderDirection | null
  readonly source?: OrderDirection | null
}

export type ProductUpdateInput = {
  readonly title?: string | null
  readonly urlId?: string | null
  readonly image?: ImageFieldInput | null
  readonly isService?: boolean | null
  readonly source?: string | null
  readonly description?: import('@keystone-6/core/types').JSONValue | null
}

export type ProductUpdateArgs = {
  readonly where: ProductWhereUniqueInput
  readonly data: ProductUpdateInput
}

export type ProductCreateInput = {
  readonly title?: string | null
  readonly urlId?: string | null
  readonly image?: ImageFieldInput | null
  readonly isService?: boolean | null
  readonly source?: string | null
  readonly description?: import('@keystone-6/core/types').JSONValue | null
}

export type EcosystemPageWhereUniqueInput = {
  readonly id?: string | null
}

export type EcosystemPageWhereInput = {
  readonly AND?: ReadonlyArray<EcosystemPageWhereInput> | EcosystemPageWhereInput | null
  readonly OR?: ReadonlyArray<EcosystemPageWhereInput> | EcosystemPageWhereInput | null
  readonly NOT?: ReadonlyArray<EcosystemPageWhereInput> | EcosystemPageWhereInput | null
  readonly id?: IDFilter | null
}

export type EcosystemPageOrderByInput = {
  readonly id?: OrderDirection | null
}

export type EcosystemPageUpdateInput = {
  readonly content?: import('@keystone-6/core/types').JSONValue | null
}

export type EcosystemPageUpdateArgs = {
  readonly where: EcosystemPageWhereUniqueInput
  readonly data: EcosystemPageUpdateInput
}

export type EcosystemPageCreateInput = {
  readonly content?: import('@keystone-6/core/types').JSONValue | null
}

export type OrganismWhereUniqueInput = {
  readonly id?: string | null
}

export type OrganismWhereInput = {
  readonly AND?: ReadonlyArray<OrganismWhereInput> | OrganismWhereInput | null
  readonly OR?: ReadonlyArray<OrganismWhereInput> | OrganismWhereInput | null
  readonly NOT?: ReadonlyArray<OrganismWhereInput> | OrganismWhereInput | null
  readonly id?: IDFilter | null
  readonly name?: StringFilter | null
  readonly scientificName?: StringFilter | null
  readonly urlId?: StringFilter | null
  readonly type?: StringFilter | null
  readonly conservationStatus?: StringFilter | null
}

export type OrganismOrderByInput = {
  readonly id?: OrderDirection | null
  readonly name?: OrderDirection | null
  readonly scientificName?: OrderDirection | null
  readonly urlId?: OrderDirection | null
  readonly type?: OrderDirection | null
  readonly conservationStatus?: OrderDirection | null
}

export type OrganismUpdateInput = {
  readonly name?: string | null
  readonly scientificName?: string | null
  readonly urlId?: string | null
  readonly type?: string | null
  readonly conservationStatus?: string | null
  readonly image?: ImageFieldInput | null
  readonly description?: import('@keystone-6/core/types').JSONValue | null
}

export type OrganismUpdateArgs = {
  readonly where: OrganismWhereUniqueInput
  readonly data: OrganismUpdateInput
}

export type OrganismCreateInput = {
  readonly name?: string | null
  readonly scientificName?: string | null
  readonly urlId?: string | null
  readonly type?: string | null
  readonly conservationStatus?: string | null
  readonly image?: ImageFieldInput | null
  readonly description?: import('@keystone-6/core/types').JSONValue | null
}

export type MailRecipientWhereUniqueInput = {
  readonly id?: string | null
}

export type MailRecipientWhereInput = {
  readonly AND?: ReadonlyArray<MailRecipientWhereInput> | MailRecipientWhereInput | null
  readonly OR?: ReadonlyArray<MailRecipientWhereInput> | MailRecipientWhereInput | null
  readonly NOT?: ReadonlyArray<MailRecipientWhereInput> | MailRecipientWhereInput | null
  readonly id?: IDFilter | null
  readonly name?: StringFilter | null
  readonly email?: StringFilter | null
}

export type MailRecipientOrderByInput = {
  readonly id?: OrderDirection | null
  readonly name?: OrderDirection | null
  readonly email?: OrderDirection | null
}

export type MailRecipientUpdateInput = {
  readonly name?: string | null
  readonly email?: string | null
}

export type MailRecipientUpdateArgs = {
  readonly where: MailRecipientWhereUniqueInput
  readonly data: MailRecipientUpdateInput
}

export type MailRecipientCreateInput = {
  readonly name?: string | null
  readonly email?: string | null
}

export type KeystoneAdminUIFieldMetaIsNonNull =
  | 'read'
  | 'create'
  | 'update'

export type KeystoneAdminUIFieldMetaItemViewFieldPosition =
  | 'form'
  | 'sidebar'

export type KeystoneAdminUIFieldMetaListViewFieldMode =
  | 'read'
  | 'hidden'

export type QueryMode =
  | 'default'
  | 'insensitive'

export type KeystoneAdminUIActionMetaItemViewNavigation =
  | 'follow'
  | 'refetch'
  | 'return'

export type KeystoneAdminUISortDirection =
  | 'ASC'
  | 'DESC'

type ResolvedUserCreateInput = {
  id?: import('../prisma/client.js').Prisma.UserCreateInput['id']
  name?: import('../prisma/client.js').Prisma.UserCreateInput['name']
  email?: import('../prisma/client.js').Prisma.UserCreateInput['email']
  password: import('../prisma/client.js').Prisma.UserCreateInput['password']
  createdAt?: import('../prisma/client.js').Prisma.UserCreateInput['createdAt']
  isAdmin?: import('../prisma/client.js').Prisma.UserCreateInput['isAdmin']
}
type ResolvedUserUpdateInput = {
  id?: undefined
  name?: import('../prisma/client.js').Prisma.UserUpdateInput['name']
  email?: import('../prisma/client.js').Prisma.UserUpdateInput['email']
  password?: import('../prisma/client.js').Prisma.UserUpdateInput['password']
  createdAt?: import('../prisma/client.js').Prisma.UserUpdateInput['createdAt']
  isAdmin?: import('../prisma/client.js').Prisma.UserUpdateInput['isAdmin']
}
type ResolvedAnnouncementCreateInput = {
  id?: import('../prisma/client.js').Prisma.AnnouncementCreateInput['id']
  text?: import('../prisma/client.js').Prisma.AnnouncementCreateInput['text']
  colour?: import('../prisma/client.js').Prisma.AnnouncementCreateInput['colour']
  active?: import('../prisma/client.js').Prisma.AnnouncementCreateInput['active']
}
type ResolvedAnnouncementUpdateInput = {
  id?: undefined
  text?: import('../prisma/client.js').Prisma.AnnouncementUpdateInput['text']
  colour?: import('../prisma/client.js').Prisma.AnnouncementUpdateInput['colour']
  active?: import('../prisma/client.js').Prisma.AnnouncementUpdateInput['active']
}
type ResolvedAboutCreateInput = {
  id: import('../prisma/client.js').Prisma.AboutCreateInput['id']
  content: import('../prisma/client.js').Prisma.AboutCreateInput['content']
}
type ResolvedAboutUpdateInput = {
  id?: undefined
  content?: import('../prisma/client.js').Prisma.AboutUpdateInput['content']
}
type ResolvedBurialCreateInput = {
  id: import('../prisma/client.js').Prisma.BurialCreateInput['id']
  image: {
  id?: import('../prisma/client.js').Prisma.BurialCreateInput['image_id']
  extension?: import('../prisma/client.js').Prisma.BurialCreateInput['image_extension']
  filesize?: import('../prisma/client.js').Prisma.BurialCreateInput['image_filesize']
  width?: import('../prisma/client.js').Prisma.BurialCreateInput['image_width']
  height?: import('../prisma/client.js').Prisma.BurialCreateInput['image_height']
  }
  content: import('../prisma/client.js').Prisma.BurialCreateInput['content']
}
type ResolvedBurialUpdateInput = {
  id?: undefined
  image: {
  id?: import('../prisma/client.js').Prisma.BurialUpdateInput['image_id']
  extension?: import('../prisma/client.js').Prisma.BurialUpdateInput['image_extension']
  filesize?: import('../prisma/client.js').Prisma.BurialUpdateInput['image_filesize']
  width?: import('../prisma/client.js').Prisma.BurialUpdateInput['image_width']
  height?: import('../prisma/client.js').Prisma.BurialUpdateInput['image_height']
  }
  content?: import('../prisma/client.js').Prisma.BurialUpdateInput['content']
}
type ResolvedFeedbackCreateInput = {
  id: import('../prisma/client.js').Prisma.FeedbackCreateInput['id']
  image: {
  id?: import('../prisma/client.js').Prisma.FeedbackCreateInput['image_id']
  extension?: import('../prisma/client.js').Prisma.FeedbackCreateInput['image_extension']
  filesize?: import('../prisma/client.js').Prisma.FeedbackCreateInput['image_filesize']
  width?: import('../prisma/client.js').Prisma.FeedbackCreateInput['image_width']
  height?: import('../prisma/client.js').Prisma.FeedbackCreateInput['image_height']
  }
  content: import('../prisma/client.js').Prisma.FeedbackCreateInput['content']
}
type ResolvedFeedbackUpdateInput = {
  id?: undefined
  image: {
  id?: import('../prisma/client.js').Prisma.FeedbackUpdateInput['image_id']
  extension?: import('../prisma/client.js').Prisma.FeedbackUpdateInput['image_extension']
  filesize?: import('../prisma/client.js').Prisma.FeedbackUpdateInput['image_filesize']
  width?: import('../prisma/client.js').Prisma.FeedbackUpdateInput['image_width']
  height?: import('../prisma/client.js').Prisma.FeedbackUpdateInput['image_height']
  }
  content?: import('../prisma/client.js').Prisma.FeedbackUpdateInput['content']
}
type ResolvedFooterCreateInput = {
  id: import('../prisma/client.js').Prisma.FooterCreateInput['id']
  address?: import('../prisma/client.js').Prisma.FooterCreateInput['address']
  phone?: import('../prisma/client.js').Prisma.FooterCreateInput['phone']
  instagramHandle?: import('../prisma/client.js').Prisma.FooterCreateInput['instagramHandle']
  facebookHandle?: import('../prisma/client.js').Prisma.FooterCreateInput['facebookHandle']
}
type ResolvedFooterUpdateInput = {
  id?: undefined
  address?: import('../prisma/client.js').Prisma.FooterUpdateInput['address']
  phone?: import('../prisma/client.js').Prisma.FooterUpdateInput['phone']
  instagramHandle?: import('../prisma/client.js').Prisma.FooterUpdateInput['instagramHandle']
  facebookHandle?: import('../prisma/client.js').Prisma.FooterUpdateInput['facebookHandle']
}
type ResolvedGalleryTagCreateInput = {
  id?: import('../prisma/client.js').Prisma.GalleryTagCreateInput['id']
  tagName?: import('../prisma/client.js').Prisma.GalleryTagCreateInput['tagName']
}
type ResolvedGalleryTagUpdateInput = {
  id?: undefined
  tagName?: import('../prisma/client.js').Prisma.GalleryTagUpdateInput['tagName']
}
type ResolvedGalleryImageCreateInput = {
  id?: import('../prisma/client.js').Prisma.GalleryImageCreateInput['id']
  image: {
  id?: import('../prisma/client.js').Prisma.GalleryImageCreateInput['image_id']
  extension?: import('../prisma/client.js').Prisma.GalleryImageCreateInput['image_extension']
  filesize?: import('../prisma/client.js').Prisma.GalleryImageCreateInput['image_filesize']
  width?: import('../prisma/client.js').Prisma.GalleryImageCreateInput['image_width']
  height?: import('../prisma/client.js').Prisma.GalleryImageCreateInput['image_height']
  }
  caption?: import('../prisma/client.js').Prisma.GalleryImageCreateInput['caption']
  author?: import('../prisma/client.js').Prisma.GalleryImageCreateInput['author']
  dateTaken: import('../prisma/client.js').Prisma.GalleryImageCreateInput['dateTaken']
  tags?: import('../prisma/client.js').Prisma.GalleryImageCreateInput['tags']
}
type ResolvedGalleryImageUpdateInput = {
  id?: undefined
  image: {
  id?: import('../prisma/client.js').Prisma.GalleryImageUpdateInput['image_id']
  extension?: import('../prisma/client.js').Prisma.GalleryImageUpdateInput['image_extension']
  filesize?: import('../prisma/client.js').Prisma.GalleryImageUpdateInput['image_filesize']
  width?: import('../prisma/client.js').Prisma.GalleryImageUpdateInput['image_width']
  height?: import('../prisma/client.js').Prisma.GalleryImageUpdateInput['image_height']
  }
  caption?: import('../prisma/client.js').Prisma.GalleryImageUpdateInput['caption']
  author?: import('../prisma/client.js').Prisma.GalleryImageUpdateInput['author']
  dateTaken?: import('../prisma/client.js').Prisma.GalleryImageUpdateInput['dateTaken']
  tags?: import('../prisma/client.js').Prisma.GalleryImageUpdateInput['tags']
}
type ResolvedTrailPageCreateInput = {
  id: import('../prisma/client.js').Prisma.TrailPageCreateInput['id']
  content: import('../prisma/client.js').Prisma.TrailPageCreateInput['content']
}
type ResolvedTrailPageUpdateInput = {
  id?: undefined
  content?: import('../prisma/client.js').Prisma.TrailPageUpdateInput['content']
}
type ResolvedTrailCreateInput = {
  id?: import('../prisma/client.js').Prisma.TrailCreateInput['id']
  name?: import('../prisma/client.js').Prisma.TrailCreateInput['name']
  image: {
  id?: import('../prisma/client.js').Prisma.TrailCreateInput['image_id']
  extension?: import('../prisma/client.js').Prisma.TrailCreateInput['image_extension']
  filesize?: import('../prisma/client.js').Prisma.TrailCreateInput['image_filesize']
  width?: import('../prisma/client.js').Prisma.TrailCreateInput['image_width']
  height?: import('../prisma/client.js').Prisma.TrailCreateInput['image_height']
  }
  length: import('../prisma/client.js').Prisma.TrailCreateInput['length']
  elevationGain: import('../prisma/client.js').Prisma.TrailCreateInput['elevationGain']
  difficulty: import('../prisma/client.js').Prisma.TrailCreateInput['difficulty']
  description: import('../prisma/client.js').Prisma.TrailCreateInput['description']
  trailCoords?: import('../prisma/client.js').Prisma.TrailCreateInput['trailCoords']
  colour?: import('../prisma/client.js').Prisma.TrailCreateInput['colour']
}
type ResolvedTrailUpdateInput = {
  id?: undefined
  name?: import('../prisma/client.js').Prisma.TrailUpdateInput['name']
  image: {
  id?: import('../prisma/client.js').Prisma.TrailUpdateInput['image_id']
  extension?: import('../prisma/client.js').Prisma.TrailUpdateInput['image_extension']
  filesize?: import('../prisma/client.js').Prisma.TrailUpdateInput['image_filesize']
  width?: import('../prisma/client.js').Prisma.TrailUpdateInput['image_width']
  height?: import('../prisma/client.js').Prisma.TrailUpdateInput['image_height']
  }
  length?: import('../prisma/client.js').Prisma.TrailUpdateInput['length']
  elevationGain?: import('../prisma/client.js').Prisma.TrailUpdateInput['elevationGain']
  difficulty?: import('../prisma/client.js').Prisma.TrailUpdateInput['difficulty']
  description?: import('../prisma/client.js').Prisma.TrailUpdateInput['description']
  trailCoords?: import('../prisma/client.js').Prisma.TrailUpdateInput['trailCoords']
  colour?: import('../prisma/client.js').Prisma.TrailUpdateInput['colour']
}
type ResolvedMapCreateInput = {
  id: import('../prisma/client.js').Prisma.MapCreateInput['id']
  centreCoords?: import('../prisma/client.js').Prisma.MapCreateInput['centreCoords']
  zoom: import('../prisma/client.js').Prisma.MapCreateInput['zoom']
}
type ResolvedMapUpdateInput = {
  id?: undefined
  centreCoords?: import('../prisma/client.js').Prisma.MapUpdateInput['centreCoords']
  zoom?: import('../prisma/client.js').Prisma.MapUpdateInput['zoom']
}
type ResolvedPrivacyCreateInput = {
  id: import('../prisma/client.js').Prisma.PrivacyCreateInput['id']
  content: import('../prisma/client.js').Prisma.PrivacyCreateInput['content']
}
type ResolvedPrivacyUpdateInput = {
  id?: undefined
  content?: import('../prisma/client.js').Prisma.PrivacyUpdateInput['content']
}
type ResolvedDisclaimerCreateInput = {
  id: import('../prisma/client.js').Prisma.DisclaimerCreateInput['id']
  content: import('../prisma/client.js').Prisma.DisclaimerCreateInput['content']
}
type ResolvedDisclaimerUpdateInput = {
  id?: undefined
  content?: import('../prisma/client.js').Prisma.DisclaimerUpdateInput['content']
}
type ResolvedProductsServicesPageCreateInput = {
  id: import('../prisma/client.js').Prisma.ProductsServicesPageCreateInput['id']
  content: import('../prisma/client.js').Prisma.ProductsServicesPageCreateInput['content']
}
type ResolvedProductsServicesPageUpdateInput = {
  id?: undefined
  content?: import('../prisma/client.js').Prisma.ProductsServicesPageUpdateInput['content']
}
type ResolvedProductCreateInput = {
  id?: import('../prisma/client.js').Prisma.ProductCreateInput['id']
  title?: import('../prisma/client.js').Prisma.ProductCreateInput['title']
  urlId?: import('../prisma/client.js').Prisma.ProductCreateInput['urlId']
  image: {
  id?: import('../prisma/client.js').Prisma.ProductCreateInput['image_id']
  extension?: import('../prisma/client.js').Prisma.ProductCreateInput['image_extension']
  filesize?: import('../prisma/client.js').Prisma.ProductCreateInput['image_filesize']
  width?: import('../prisma/client.js').Prisma.ProductCreateInput['image_width']
  height?: import('../prisma/client.js').Prisma.ProductCreateInput['image_height']
  }
  isService?: import('../prisma/client.js').Prisma.ProductCreateInput['isService']
  source?: import('../prisma/client.js').Prisma.ProductCreateInput['source']
  description: import('../prisma/client.js').Prisma.ProductCreateInput['description']
}
type ResolvedProductUpdateInput = {
  id?: undefined
  title?: import('../prisma/client.js').Prisma.ProductUpdateInput['title']
  urlId?: import('../prisma/client.js').Prisma.ProductUpdateInput['urlId']
  image: {
  id?: import('../prisma/client.js').Prisma.ProductUpdateInput['image_id']
  extension?: import('../prisma/client.js').Prisma.ProductUpdateInput['image_extension']
  filesize?: import('../prisma/client.js').Prisma.ProductUpdateInput['image_filesize']
  width?: import('../prisma/client.js').Prisma.ProductUpdateInput['image_width']
  height?: import('../prisma/client.js').Prisma.ProductUpdateInput['image_height']
  }
  isService?: import('../prisma/client.js').Prisma.ProductUpdateInput['isService']
  source?: import('../prisma/client.js').Prisma.ProductUpdateInput['source']
  description?: import('../prisma/client.js').Prisma.ProductUpdateInput['description']
}
type ResolvedEcosystemPageCreateInput = {
  id: import('../prisma/client.js').Prisma.EcosystemPageCreateInput['id']
  content: import('../prisma/client.js').Prisma.EcosystemPageCreateInput['content']
}
type ResolvedEcosystemPageUpdateInput = {
  id?: undefined
  content?: import('../prisma/client.js').Prisma.EcosystemPageUpdateInput['content']
}
type ResolvedOrganismCreateInput = {
  id?: import('../prisma/client.js').Prisma.OrganismCreateInput['id']
  name?: import('../prisma/client.js').Prisma.OrganismCreateInput['name']
  scientificName?: import('../prisma/client.js').Prisma.OrganismCreateInput['scientificName']
  urlId?: import('../prisma/client.js').Prisma.OrganismCreateInput['urlId']
  type: import('../prisma/client.js').Prisma.OrganismCreateInput['type']
  conservationStatus?: import('../prisma/client.js').Prisma.OrganismCreateInput['conservationStatus']
  image: {
  id?: import('../prisma/client.js').Prisma.OrganismCreateInput['image_id']
  extension?: import('../prisma/client.js').Prisma.OrganismCreateInput['image_extension']
  filesize?: import('../prisma/client.js').Prisma.OrganismCreateInput['image_filesize']
  width?: import('../prisma/client.js').Prisma.OrganismCreateInput['image_width']
  height?: import('../prisma/client.js').Prisma.OrganismCreateInput['image_height']
  }
  description: import('../prisma/client.js').Prisma.OrganismCreateInput['description']
}
type ResolvedOrganismUpdateInput = {
  id?: undefined
  name?: import('../prisma/client.js').Prisma.OrganismUpdateInput['name']
  scientificName?: import('../prisma/client.js').Prisma.OrganismUpdateInput['scientificName']
  urlId?: import('../prisma/client.js').Prisma.OrganismUpdateInput['urlId']
  type?: import('../prisma/client.js').Prisma.OrganismUpdateInput['type']
  conservationStatus?: import('../prisma/client.js').Prisma.OrganismUpdateInput['conservationStatus']
  image: {
  id?: import('../prisma/client.js').Prisma.OrganismUpdateInput['image_id']
  extension?: import('../prisma/client.js').Prisma.OrganismUpdateInput['image_extension']
  filesize?: import('../prisma/client.js').Prisma.OrganismUpdateInput['image_filesize']
  width?: import('../prisma/client.js').Prisma.OrganismUpdateInput['image_width']
  height?: import('../prisma/client.js').Prisma.OrganismUpdateInput['image_height']
  }
  description?: import('../prisma/client.js').Prisma.OrganismUpdateInput['description']
}
type ResolvedMailRecipientCreateInput = {
  id?: import('../prisma/client.js').Prisma.MailRecipientCreateInput['id']
  name?: import('../prisma/client.js').Prisma.MailRecipientCreateInput['name']
  email?: import('../prisma/client.js').Prisma.MailRecipientCreateInput['email']
}
type ResolvedMailRecipientUpdateInput = {
  id?: undefined
  name?: import('../prisma/client.js').Prisma.MailRecipientUpdateInput['name']
  email?: import('../prisma/client.js').Prisma.MailRecipientUpdateInput['email']
}

export interface Session {}
type __Session = keyof Session extends never ? any : Session

export declare namespace Lists {
  export type User<Session = __Session> = import('@keystone-6/core/types').ListConfig<Lists.User.TypeInfo<Session>>
  namespace User {
    export type Item = import('../prisma/client.js').User
    export type TypeInfo<Session = __Session> = {
      key: 'User'
      isSingleton: false
      fields: 'id' | 'name' | 'email' | 'password' | 'createdAt' | 'isAdmin'
      actions: never
      item: Item
      inputs: {
        where: UserWhereInput
        uniqueWhere: UserWhereUniqueInput
        create: UserCreateInput
        update: UserUpdateInput
        orderBy: UserOrderByInput
      }
      prisma: {
        create: ResolvedUserCreateInput
        update: ResolvedUserUpdateInput
      }
      all: __TypeInfo<Session>
    }
  }
  export type Announcement<Session = __Session> = import('@keystone-6/core/types').ListConfig<Lists.Announcement.TypeInfo<Session>>
  namespace Announcement {
    export type Item = import('../prisma/client.js').Announcement
    export type TypeInfo<Session = __Session> = {
      key: 'Announcement'
      isSingleton: false
      fields: 'id' | 'text' | 'colour' | 'active'
      actions: never
      item: Item
      inputs: {
        where: AnnouncementWhereInput
        uniqueWhere: AnnouncementWhereUniqueInput
        create: AnnouncementCreateInput
        update: AnnouncementUpdateInput
        orderBy: AnnouncementOrderByInput
      }
      prisma: {
        create: ResolvedAnnouncementCreateInput
        update: ResolvedAnnouncementUpdateInput
      }
      all: __TypeInfo<Session>
    }
  }
  export type About<Session = __Session> = import('@keystone-6/core/types').ListConfig<Lists.About.TypeInfo<Session>>
  namespace About {
    export type Item = import('../prisma/client.js').About
    export type TypeInfo<Session = __Session> = {
      key: 'About'
      isSingleton: true
      fields: 'id' | 'content'
      actions: never
      item: Item
      inputs: {
        where: AboutWhereInput
        uniqueWhere: AboutWhereUniqueInput
        create: AboutCreateInput
        update: AboutUpdateInput
        orderBy: AboutOrderByInput
      }
      prisma: {
        create: ResolvedAboutCreateInput
        update: ResolvedAboutUpdateInput
      }
      all: __TypeInfo<Session>
    }
  }
  export type Burial<Session = __Session> = import('@keystone-6/core/types').ListConfig<Lists.Burial.TypeInfo<Session>>
  namespace Burial {
    export type Item = import('../prisma/client.js').Burial
    export type TypeInfo<Session = __Session> = {
      key: 'Burial'
      isSingleton: true
      fields: 'id' | 'image' | 'content'
      actions: never
      item: Item
      inputs: {
        where: BurialWhereInput
        uniqueWhere: BurialWhereUniqueInput
        create: BurialCreateInput
        update: BurialUpdateInput
        orderBy: BurialOrderByInput
      }
      prisma: {
        create: ResolvedBurialCreateInput
        update: ResolvedBurialUpdateInput
      }
      all: __TypeInfo<Session>
    }
  }
  export type Feedback<Session = __Session> = import('@keystone-6/core/types').ListConfig<Lists.Feedback.TypeInfo<Session>>
  namespace Feedback {
    export type Item = import('../prisma/client.js').Feedback
    export type TypeInfo<Session = __Session> = {
      key: 'Feedback'
      isSingleton: true
      fields: 'id' | 'image' | 'content'
      actions: never
      item: Item
      inputs: {
        where: FeedbackWhereInput
        uniqueWhere: FeedbackWhereUniqueInput
        create: FeedbackCreateInput
        update: FeedbackUpdateInput
        orderBy: FeedbackOrderByInput
      }
      prisma: {
        create: ResolvedFeedbackCreateInput
        update: ResolvedFeedbackUpdateInput
      }
      all: __TypeInfo<Session>
    }
  }
  export type Footer<Session = __Session> = import('@keystone-6/core/types').ListConfig<Lists.Footer.TypeInfo<Session>>
  namespace Footer {
    export type Item = import('../prisma/client.js').Footer
    export type TypeInfo<Session = __Session> = {
      key: 'Footer'
      isSingleton: true
      fields: 'id' | 'address' | 'phone' | 'instagramHandle' | 'facebookHandle'
      actions: never
      item: Item
      inputs: {
        where: FooterWhereInput
        uniqueWhere: FooterWhereUniqueInput
        create: FooterCreateInput
        update: FooterUpdateInput
        orderBy: FooterOrderByInput
      }
      prisma: {
        create: ResolvedFooterCreateInput
        update: ResolvedFooterUpdateInput
      }
      all: __TypeInfo<Session>
    }
  }
  export type GalleryTag<Session = __Session> = import('@keystone-6/core/types').ListConfig<Lists.GalleryTag.TypeInfo<Session>>
  namespace GalleryTag {
    export type Item = import('../prisma/client.js').GalleryTag
    export type TypeInfo<Session = __Session> = {
      key: 'GalleryTag'
      isSingleton: false
      fields: 'id' | 'tagName'
      actions: never
      item: Item
      inputs: {
        where: GalleryTagWhereInput
        uniqueWhere: GalleryTagWhereUniqueInput
        create: GalleryTagCreateInput
        update: GalleryTagUpdateInput
        orderBy: GalleryTagOrderByInput
      }
      prisma: {
        create: ResolvedGalleryTagCreateInput
        update: ResolvedGalleryTagUpdateInput
      }
      all: __TypeInfo<Session>
    }
  }
  export type GalleryImage<Session = __Session> = import('@keystone-6/core/types').ListConfig<Lists.GalleryImage.TypeInfo<Session>>
  namespace GalleryImage {
    export type Item = import('../prisma/client.js').GalleryImage
    export type TypeInfo<Session = __Session> = {
      key: 'GalleryImage'
      isSingleton: false
      fields: 'id' | 'image' | 'caption' | 'author' | 'dateTaken' | 'tags'
      actions: never
      item: Item
      inputs: {
        where: GalleryImageWhereInput
        uniqueWhere: GalleryImageWhereUniqueInput
        create: GalleryImageCreateInput
        update: GalleryImageUpdateInput
        orderBy: GalleryImageOrderByInput
      }
      prisma: {
        create: ResolvedGalleryImageCreateInput
        update: ResolvedGalleryImageUpdateInput
      }
      all: __TypeInfo<Session>
    }
  }
  export type TrailPage<Session = __Session> = import('@keystone-6/core/types').ListConfig<Lists.TrailPage.TypeInfo<Session>>
  namespace TrailPage {
    export type Item = import('../prisma/client.js').TrailPage
    export type TypeInfo<Session = __Session> = {
      key: 'TrailPage'
      isSingleton: true
      fields: 'id' | 'content'
      actions: never
      item: Item
      inputs: {
        where: TrailPageWhereInput
        uniqueWhere: TrailPageWhereUniqueInput
        create: TrailPageCreateInput
        update: TrailPageUpdateInput
        orderBy: TrailPageOrderByInput
      }
      prisma: {
        create: ResolvedTrailPageCreateInput
        update: ResolvedTrailPageUpdateInput
      }
      all: __TypeInfo<Session>
    }
  }
  export type Trail<Session = __Session> = import('@keystone-6/core/types').ListConfig<Lists.Trail.TypeInfo<Session>>
  namespace Trail {
    export type Item = import('../prisma/client.js').Trail
    export type TypeInfo<Session = __Session> = {
      key: 'Trail'
      isSingleton: false
      fields: 'id' | 'name' | 'image' | 'length' | 'elevationGain' | 'difficulty' | 'description' | 'trailCoords' | 'colour'
      actions: never
      item: Item
      inputs: {
        where: TrailWhereInput
        uniqueWhere: TrailWhereUniqueInput
        create: TrailCreateInput
        update: TrailUpdateInput
        orderBy: TrailOrderByInput
      }
      prisma: {
        create: ResolvedTrailCreateInput
        update: ResolvedTrailUpdateInput
      }
      all: __TypeInfo<Session>
    }
  }
  export type Map<Session = __Session> = import('@keystone-6/core/types').ListConfig<Lists.Map.TypeInfo<Session>>
  namespace Map {
    export type Item = import('../prisma/client.js').Map
    export type TypeInfo<Session = __Session> = {
      key: 'Map'
      isSingleton: true
      fields: 'id' | 'centreCoords' | 'zoom'
      actions: never
      item: Item
      inputs: {
        where: MapWhereInput
        uniqueWhere: MapWhereUniqueInput
        create: MapCreateInput
        update: MapUpdateInput
        orderBy: MapOrderByInput
      }
      prisma: {
        create: ResolvedMapCreateInput
        update: ResolvedMapUpdateInput
      }
      all: __TypeInfo<Session>
    }
  }
  export type Privacy<Session = __Session> = import('@keystone-6/core/types').ListConfig<Lists.Privacy.TypeInfo<Session>>
  namespace Privacy {
    export type Item = import('../prisma/client.js').Privacy
    export type TypeInfo<Session = __Session> = {
      key: 'Privacy'
      isSingleton: true
      fields: 'id' | 'content'
      actions: never
      item: Item
      inputs: {
        where: PrivacyWhereInput
        uniqueWhere: PrivacyWhereUniqueInput
        create: PrivacyCreateInput
        update: PrivacyUpdateInput
        orderBy: PrivacyOrderByInput
      }
      prisma: {
        create: ResolvedPrivacyCreateInput
        update: ResolvedPrivacyUpdateInput
      }
      all: __TypeInfo<Session>
    }
  }
  export type Disclaimer<Session = __Session> = import('@keystone-6/core/types').ListConfig<Lists.Disclaimer.TypeInfo<Session>>
  namespace Disclaimer {
    export type Item = import('../prisma/client.js').Disclaimer
    export type TypeInfo<Session = __Session> = {
      key: 'Disclaimer'
      isSingleton: true
      fields: 'id' | 'content'
      actions: never
      item: Item
      inputs: {
        where: DisclaimerWhereInput
        uniqueWhere: DisclaimerWhereUniqueInput
        create: DisclaimerCreateInput
        update: DisclaimerUpdateInput
        orderBy: DisclaimerOrderByInput
      }
      prisma: {
        create: ResolvedDisclaimerCreateInput
        update: ResolvedDisclaimerUpdateInput
      }
      all: __TypeInfo<Session>
    }
  }
  export type ProductsServicesPage<Session = __Session> = import('@keystone-6/core/types').ListConfig<Lists.ProductsServicesPage.TypeInfo<Session>>
  namespace ProductsServicesPage {
    export type Item = import('../prisma/client.js').ProductsServicesPage
    export type TypeInfo<Session = __Session> = {
      key: 'ProductsServicesPage'
      isSingleton: true
      fields: 'id' | 'content'
      actions: never
      item: Item
      inputs: {
        where: ProductsServicesPageWhereInput
        uniqueWhere: ProductsServicesPageWhereUniqueInput
        create: ProductsServicesPageCreateInput
        update: ProductsServicesPageUpdateInput
        orderBy: ProductsServicesPageOrderByInput
      }
      prisma: {
        create: ResolvedProductsServicesPageCreateInput
        update: ResolvedProductsServicesPageUpdateInput
      }
      all: __TypeInfo<Session>
    }
  }
  export type Product<Session = __Session> = import('@keystone-6/core/types').ListConfig<Lists.Product.TypeInfo<Session>>
  namespace Product {
    export type Item = import('../prisma/client.js').Product
    export type TypeInfo<Session = __Session> = {
      key: 'Product'
      isSingleton: false
      fields: 'id' | 'title' | 'urlId' | 'image' | 'isService' | 'source' | 'description'
      actions: never
      item: Item
      inputs: {
        where: ProductWhereInput
        uniqueWhere: ProductWhereUniqueInput
        create: ProductCreateInput
        update: ProductUpdateInput
        orderBy: ProductOrderByInput
      }
      prisma: {
        create: ResolvedProductCreateInput
        update: ResolvedProductUpdateInput
      }
      all: __TypeInfo<Session>
    }
  }
  export type EcosystemPage<Session = __Session> = import('@keystone-6/core/types').ListConfig<Lists.EcosystemPage.TypeInfo<Session>>
  namespace EcosystemPage {
    export type Item = import('../prisma/client.js').EcosystemPage
    export type TypeInfo<Session = __Session> = {
      key: 'EcosystemPage'
      isSingleton: true
      fields: 'id' | 'content'
      actions: never
      item: Item
      inputs: {
        where: EcosystemPageWhereInput
        uniqueWhere: EcosystemPageWhereUniqueInput
        create: EcosystemPageCreateInput
        update: EcosystemPageUpdateInput
        orderBy: EcosystemPageOrderByInput
      }
      prisma: {
        create: ResolvedEcosystemPageCreateInput
        update: ResolvedEcosystemPageUpdateInput
      }
      all: __TypeInfo<Session>
    }
  }
  export type Organism<Session = __Session> = import('@keystone-6/core/types').ListConfig<Lists.Organism.TypeInfo<Session>>
  namespace Organism {
    export type Item = import('../prisma/client.js').Organism
    export type TypeInfo<Session = __Session> = {
      key: 'Organism'
      isSingleton: false
      fields: 'id' | 'name' | 'scientificName' | 'urlId' | 'type' | 'conservationStatus' | 'image' | 'description'
      actions: never
      item: Item
      inputs: {
        where: OrganismWhereInput
        uniqueWhere: OrganismWhereUniqueInput
        create: OrganismCreateInput
        update: OrganismUpdateInput
        orderBy: OrganismOrderByInput
      }
      prisma: {
        create: ResolvedOrganismCreateInput
        update: ResolvedOrganismUpdateInput
      }
      all: __TypeInfo<Session>
    }
  }
  export type MailRecipient<Session = __Session> = import('@keystone-6/core/types').ListConfig<Lists.MailRecipient.TypeInfo<Session>>
  namespace MailRecipient {
    export type Item = import('../prisma/client.js').MailRecipient
    export type TypeInfo<Session = __Session> = {
      key: 'MailRecipient'
      isSingleton: false
      fields: 'id' | 'name' | 'email'
      actions: never
      item: Item
      inputs: {
        where: MailRecipientWhereInput
        uniqueWhere: MailRecipientWhereUniqueInput
        create: MailRecipientCreateInput
        update: MailRecipientUpdateInput
        orderBy: MailRecipientOrderByInput
      }
      prisma: {
        create: ResolvedMailRecipientCreateInput
        update: ResolvedMailRecipientUpdateInput
      }
      all: __TypeInfo<Session>
    }
  }
}
export type Context<Session = __Session> = import('@keystone-6/core/types').KeystoneContext<TypeInfo<Session>>
export type Config<Session = __Session> = import('@keystone-6/core/types').KeystoneConfig<TypeInfo<Session>>

export type TypeInfo<Session = __Session> = {
  lists: {
    readonly User: Lists.User.TypeInfo<Session>
    readonly Announcement: Lists.Announcement.TypeInfo<Session>
    readonly About: Lists.About.TypeInfo<Session>
    readonly Burial: Lists.Burial.TypeInfo<Session>
    readonly Feedback: Lists.Feedback.TypeInfo<Session>
    readonly Footer: Lists.Footer.TypeInfo<Session>
    readonly GalleryTag: Lists.GalleryTag.TypeInfo<Session>
    readonly GalleryImage: Lists.GalleryImage.TypeInfo<Session>
    readonly TrailPage: Lists.TrailPage.TypeInfo<Session>
    readonly Trail: Lists.Trail.TypeInfo<Session>
    readonly Map: Lists.Map.TypeInfo<Session>
    readonly Privacy: Lists.Privacy.TypeInfo<Session>
    readonly Disclaimer: Lists.Disclaimer.TypeInfo<Session>
    readonly ProductsServicesPage: Lists.ProductsServicesPage.TypeInfo<Session>
    readonly Product: Lists.Product.TypeInfo<Session>
    readonly EcosystemPage: Lists.EcosystemPage.TypeInfo<Session>
    readonly Organism: Lists.Organism.TypeInfo<Session>
    readonly MailRecipient: Lists.MailRecipient.TypeInfo<Session>
  }
  prisma: import('../prisma/client.js').PrismaClient
  prismaClientOptions: import('../prisma/client.js').Prisma.PrismaClientOptions
  session: Session
  dbProvider: 'sqlite'
}

type __TypeInfo<Session = __Session> = TypeInfo<Session>

export type Lists<Session = __Session> = {
  [Key in keyof TypeInfo['lists']]?: import('@keystone-6/core/types').ListConfig<TypeInfo<Session>['lists'][Key]>
} & Record<string, import('@keystone-6/core/types').ListConfig<any>>

export {}
