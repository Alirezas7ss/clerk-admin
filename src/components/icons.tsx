import {
  BadgeInfo,
  CalendarDays,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  ChevronsUpDown,
  ChevronUp,
  Copy,
  CreditCard,
  Crop,
  DollarSign,
  Edit,
  Eye,
  EyeOff,
  Flag,
  GalleryThumbnails,
  Github,
  GraduationCap,
  Heart,
  HeartHandshake,
  Hourglass,
  Image,
  Laptop,
  Linkedin,
  ListVideo,
  Loader2,
  Lock,
  LogOut,
  LucideProps,
  MessageSquare,
  Minus,
  MonitorPlay,
  Moon,
  MoreVertical,
  Paperclip,
  Pencil,
  Plus,
  Power,
  RefreshCw,
  Share2,
  ShoppingBag,
  SunMedium,
  Text,
  Trash,
  UploadCloud,
  User,
  UserCircle2,
  X,
  type XIcon as LucideIcon,
} from 'lucide-react'

export type Icon = typeof LucideIcon

export const Icons = {
  github: Github,
  flag: Flag,
  lock: Lock,
  heartHandshake: HeartHandshake,
  badgeInfo: BadgeInfo,
  close: X,
  moreVertical: MoreVertical,
  upload: UploadCloud,
  reset: RefreshCw,
  crop: Crop,
  product: GalleryThumbnails,
  course: MonitorPlay,
  text: Text,
  placeholder: Image,
  linkedin: Linkedin,
  user: User,
  store: ShoppingBag,
  messageSquare: MessageSquare,
  share: Share2,
  billing: CreditCard,
  edit: Edit,
  dollarSign: DollarSign,
  sun: SunMedium,
  moon: Moon,
  pencil: Pencil,
  laptop: Laptop,
  hourglass: Hourglass,
  calendarDays: CalendarDays,
  userCircle2: UserCircle2,
  heart: Heart,
  power: Power,
  logOut: LogOut,
  listVideo: ListVideo,
  Paperclip: Paperclip,
  graduationCap: GraduationCap,
  view: Eye,
  hide: EyeOff,
  remove: Minus,
  copy: Copy,
  add: Plus,
  trash: Trash,
  spinner: Loader2,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  chevronsLeft: ChevronsLeft,
  chevronsRight: ChevronsRight,
  chevronUp: ChevronUp,
  chevronDown: ChevronDown,
  chevronUpDown: ChevronsUpDown,
  youtube: (props: LucideProps) => (
    <svg
      {...props}
      viewBox="0 -77 512.00213 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m501.453125 56.09375c-5.902344-21.933594-23.195313-39.222656-45.125-45.128906-40.066406-10.964844-200.332031-10.964844-200.332031-10.964844s-160.261719 0-200.328125 10.546875c-21.507813 5.902344-39.222657 23.617187-45.125 45.546875-10.542969 40.0625-10.542969 123.148438-10.542969 123.148438s0 83.503906 10.542969 123.148437c5.90625 21.929687 23.195312 39.222656 45.128906 45.128906 40.484375 10.964844 200.328125 10.964844 200.328125 10.964844s160.261719 0 200.328125-10.546875c21.933594-5.902344 39.222656-23.195312 45.128906-45.125 10.542969-40.066406 10.542969-123.148438 10.542969-123.148438s.421875-83.507812-10.546875-123.570312zm0 0"
        fill="#94a3b8"
      />
      <path
        d="m204.96875 256 133.269531-76.757812-133.269531-76.757813zm0 0"
        fill="#fff"
      />
    </svg>
  ),

  per: (props: LucideProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="lucide lucide-user-circle-2"
    >
      <path d="M18 20a6 6 0 0 0-12 0"></path>
      <circle cx="12" cy="10" r="4"></circle>
      <circle cx="12" cy="12" r="10"></circle>
    </svg>
  ),
  bag: (props: LucideProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="lucide lucide-briefcase"
    >
      <rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect>
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
    </svg>
  ),
  cart: (props: LucideProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="lucide lucide-shopping-cart"
    >
      <circle cx="8" cy="21" r="1"></circle>
      <circle cx="19" cy="21" r="1"></circle>
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
    </svg>
  ),
  search: (props: LucideProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="lucide lucide-search"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" x2="16.65" y1="21" y2="16.65"></line>
    </svg>
  ),
  logo: (props: LucideProps) => (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="85pt"
      height="43pt"
      viewBox="0 0 85 43"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,43) scale(0.0100000,-0.0100000)"
        fill="red"
        stroke="none"
      >
        <path
          d="M929 4173 c-6 -16 -16 -37 -22 -48 -6 -11 -17 -33 -25 -50 -9 -16
     -19 -37 -24 -45 -4 -8 -11 -22 -14 -30 -3 -8 -9 -22 -14 -30 -5 -8 -28 -53
     -52 -100 -24 -47 -46 -86 -50 -88 -5 -2 -8 -8 -8 -14 0 -14 -83 -182 -92 -186
     -5 -2 -8 -8 -8 -13 0 -11 -141 -296 -180 -364 -12 -22 -27 -43 -33 -47 -6 -4
     -37 17 -70 45 -32 29 -66 57 -75 62 -9 6 -41 31 -71 58 -30 26 -59 47 -63 47
     -4 0 -8 -709 -8 -1575 l0 -1575 993 2 992 3 5 285 5 285 65 -1 c84 -1 134 -16
     167 -48 14 -14 30 -26 34 -26 5 0 9 -9 9 -20 0 -11 7 -20 15 -20 8 0 15 -7 15
     -15 0 -8 7 -15 15 -15 8 0 15 -9 15 -19 0 -10 7 -21 15 -25 8 -3 15 -12 15
     -20 0 -7 7 -16 15 -20 8 -3 15 -14 15 -25 0 -10 7 -21 15 -25 8 -3 15 -12 15
     -21 0 -8 5 -15 10 -15 6 0 10 -7 10 -15 0 -9 7 -18 15 -21 8 -4 15 -14 15 -24
     0 -10 7 -20 15 -24 8 -3 15 -12 15 -20 0 -7 7 -16 15 -20 8 -3 15 -16 15 -30
     0 -13 7 -26 15 -30 8 -3 15 -11 15 -18 1 -7 9 -23 19 -35 18 -22 25 -23 180
     -23 145 0 189 7 146 24 -8 3 -15 12 -15 21 0 8 -3 15 -8 15 -4 0 -12 9 -17 19
     -48 94 -62 117 -72 124 -7 4 -13 17 -13 27 0 11 -7 20 -15 20 -8 0 -15 9 -15
     19 0 10 -7 21 -15 25 -8 3 -15 16 -15 30 0 13 -7 26 -15 30 -8 3 -15 12 -15
     20 0 7 -7 16 -15 20 -8 3 -12 12 -9 21 4 10 0 15 -10 15 -9 0 -16 7 -16 15 0
     18 -107 125 -126 125 -8 0 -14 10 -14 25 0 20 6 25 38 31 42 8 132 50 132 62
     0 5 11 15 25 22 14 7 25 19 25 26 0 7 6 17 13 21 21 14 47 73 47 109 0 24 5
     34 15 34 12 0 15 15 15 74 0 56 -4 75 -15 80 -10 3 -15 19 -15 45 0 25 -5 41
     -15 45 -8 3 -15 15 -15 26 0 11 -7 23 -15 26 -8 4 -15 12 -15 20 0 31 -55 67
     -160 106 -51 20 -82 21 -452 25 l-397 5 -3 -399 c-3 -411 -4 -420 -45 -461 -7
     -7 -13 -19 -13 -27 0 -7 -7 -15 -15 -19 -8 -3 -15 -12 -15 -20 0 -7 -7 -16
     -15 -20 -8 -3 -15 -11 -15 -19 0 -14 -51 -67 -64 -67 -5 0 -14 -6 -20 -14 -16
     -21 -166 -96 -191 -96 -11 0 -27 -6 -34 -12 -16 -17 -447 -18 -482 -2 -19 9
     -75 28 -119 40 -35 10 -50 18 -50 28 0 6 -20 20 -43 30 -46 22 -67 39 -67 55
     0 6 -7 11 -15 11 -8 0 -15 7 -15 15 0 8 -7 15 -15 15 -8 0 -15 7 -15 16 0 9
     -6 22 -13 28 -7 6 -21 29 -29 51 -62 154 -60 132 -65 813 l-4 622 170 0 171 0
     0 -582 c0 -513 2 -589 17 -642 9 -34 22 -65 30 -69 7 -4 13 -16 13 -25 1 -41
     112 -122 168 -122 11 0 24 -4 27 -10 8 -12 179 -13 203 -1 9 5 36 15 59 21 46
     14 103 60 103 84 0 9 4 16 9 16 5 0 18 15 28 33 16 30 18 77 21 662 l3 630
     154 3 155 3 0 624 c0 344 -3 625 -6 625 -4 0 -32 -22 -63 -48 -31 -26 -68 -57
     -82 -68 -15 -10 -54 -43 -88 -71 -34 -29 -66 -53 -71 -53 -5 0 -71 124 -146
     276 -76 151 -145 285 -154 297 -9 12 -20 35 -24 51 -4 17 -16 42 -27 57 -10
     15 -19 34 -19 42 0 8 -7 20 -15 27 -8 7 -15 20 -15 30 0 10 -6 23 -14 29 -8 7
     -17 23 -20 36 -4 14 -11 25 -16 25 -6 0 -10 9 -10 19 0 11 -5 23 -10 26 -12 7
     -44 76 -41 88 2 13 -19 47 -30 47 -5 0 -14 -12 -20 -27z m1576 -2833 c3 -5 17
     -10 30 -10 30 0 85 -49 85 -76 0 -12 7 -24 15 -28 10 -3 15 -19 15 -46 0 -27
     -5 -43 -15 -46 -8 -4 -15 -15 -15 -25 0 -10 -8 -27 -18 -36 -47 -45 -59 -47
     -279 -51 l-213 -4 0 159 c0 88 3 163 7 166 11 11 381 8 388 -3z"
        />
        <path
          d="M6545 1593 c-22 -2 -44 -9 -49 -14 -6 -5 -19 -9 -30 -9 -45 0 -155
     -69 -230 -144 -42 -42 -76 -82 -76 -90 0 -7 -7 -19 -15 -26 -8 -7 -15 -21 -15
     -32 0 -10 -7 -21 -15 -24 -9 -4 -15 -19 -15 -39 0 -20 -6 -35 -15 -39 -11 -4
     -15 -22 -15 -69 0 -45 -5 -68 -15 -77 -12 -10 -15 -37 -15 -120 0 -83 3 -110
     15 -120 10 -8 15 -31 15 -72 0 -43 4 -60 15 -64 10 -4 15 -20 15 -45 0 -21 4
     -39 9 -39 5 0 19 -21 32 -48 12 -26 33 -57 46 -69 13 -12 23 -28 23 -36 0 -7
     12 -20 28 -28 15 -8 36 -24 47 -36 23 -25 150 -93 174 -93 9 0 28 -8 41 -17
     21 -15 48 -18 175 -18 137 1 153 2 185 23 19 12 43 22 53 22 20 0 69 23 95 45
     55 47 129 122 135 138 3 9 11 17 17 17 5 0 10 11 10 24 0 13 7 26 15 30 8 3
     15 16 15 30 0 13 7 26 15 30 19 7 21 75 3 80 -7 2 -30 9 -50 15 -20 7 -45 14
     -55 16 -26 6 -85 26 -107 37 -24 12 -56 -20 -56 -57 0 -14 -7 -28 -15 -31 -8
     -4 -15 -17 -15 -30 0 -14 -7 -27 -15 -30 -8 -4 -15 -14 -15 -24 0 -10 -9 -22
     -20 -25 -11 -4 -33 -18 -47 -31 -15 -13 -38 -27 -52 -30 -14 -3 -36 -10 -49
     -15 -45 -18 -98 -10 -197 30 -45 18 -121 87 -117 106 1 7 -4 15 -13 19 -8 3
     -15 15 -15 26 0 11 -7 23 -15 26 -11 4 -15 21 -15 58 0 29 -7 59 -15 70 -22
     29 -22 244 0 252 11 4 15 21 15 59 0 38 4 55 15 59 8 3 15 15 15 26 0 11 7 23
     15 26 8 4 15 12 15 19 0 22 61 80 108 104 28 15 73 25 130 30 83 7 88 6 142
     -22 30 -16 67 -42 82 -58 15 -16 32 -29 37 -29 6 0 11 -8 11 -19 0 -10 7 -24
     15 -31 8 -7 15 -24 15 -37 0 -24 2 -25 48 -18 26 4 52 10 57 15 6 4 35 11 65
     14 89 11 134 35 95 50 -9 3 -15 18 -15 36 0 18 -6 33 -15 36 -8 4 -15 17 -15
     30 0 13 -5 24 -10 24 -6 0 -14 8 -17 18 -4 9 -36 45 -71 80 -60 58 -114 91
     -202 121 -36 13 -256 22 -325 14z"
        />
        <path d="M3160 895 l0 -675 140 0 140 0 0 675 0 675 -140 0 -140 0 0 -675z" />
        <path
          d="M3610 1460 l0 -110 195 0 195 0 2 -562 3 -563 138 -3 137 -3 0 560
     c0 500 2 559 16 565 9 3 99 6 200 6 l184 0 0 110 0 110 -535 0 -535 0 0 -110z"
        />
        <path
          d="M4852 898 l3 -673 508 -3 507 -2 0 115 0 115 -357 0 c-197 0 -364 4
     -371 8 -9 7 -12 50 -10 183 l3 174 325 5 325 5 0 110 0 110 -325 5 -325 5 0
     145 0 145 353 3 352 2 0 110 0 110 -495 0 -495 0 2 -672z"
        />
        <path
          d="M7370 1460 l0 -110 196 -2 195 -3 2 -560 2 -560 142 -3 143 -3 2 563
     3 563 198 3 197 2 0 110 0 110 -540 0 -540 0 0 -110z"
        />
      </g>
    </svg>
  ),
  google: (props: LucideProps) => (
    <svg {...props} viewBox="0 0 24 24">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
      <path d="M1 1h22v22H1z" fill="none" />
    </svg>
  ),
  InstagramIcon: (props: LucideProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17.046 7h.01m-14.01 5c0-2.514 0-3.77.354-4.78a6.3 6.3 0 013.866-3.866C8.276 3 9.533 3 12.046 3c2.514 0 3.77 0 4.781.354a6.3 6.3 0 013.866 3.865c.353 1.01.353 2.267.353 4.781s0 3.77-.353 4.78a6.3 6.3 0 01-3.866 3.866c-1.01.354-2.267.354-4.78.354-2.514 0-3.771 0-4.781-.354A6.3 6.3 0 013.4 16.782c-.354-1.01-.354-2.267-.354-4.781zm12.778-.56a3.819 3.819 0 11-7.555 1.12 3.819 3.819 0 017.555-1.12z"
      ></path>
    </svg>
  ),
  DiscordIcon: (props: LucideProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M11 6h2.693a.5.5 0 00.448-.278l.678-1.368a.476.476 0 01.557-.252c.656.188 2.03.641 3.128 1.398 3.864 2.897 3.504 9.39 3.475 10.76a.508.508 0 01-.065.24C19.931 20 16.491 20 16.491 20l-1.166-2.426M13 6h-2.688a.5.5 0 01-.448-.277l-.683-1.37a.476.476 0 00-.556-.252c-.655.188-2.031.642-3.13 1.399-3.863 2.897-3.503 9.39-3.474 10.76a.507.507 0 00.065.24C4.069 20 7.509 20 7.509 20l1.17-2.427M7 17c.6.225 1.155.416 1.678.573M17.004 17c-.6.225-1.156.416-1.68.574m-6.645 0c2.444.735 4.202.735 6.646 0M10.002 12a1 1 0 11-2 0 1 1 0 012 0zm6.002 0a1 1 0 11-2 0 1 1 0 012 0z"
      ></path>
    </svg>
  ),
  GithubIcon: (props: LucideProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M10 15a3.72 3.72 0 00-1 2.58V21m5-6a3.72 3.72 0 011 2.58V21m-6-1.95a5.7 5.7 0 01-2.82.36c-1.52-.52-1.12-1.9-1.9-2.47A2.37 2.37 0 003 16.5m16-6.75c0 3-1.95 5.25-7 5.25s-7-2.25-7-5.25a6.3 6.3 0 01.68-3c-.34-1.47-.21-3.28.52-3.64.73-.36 2.27.3 3.54 1.15a12.86 12.86 0 012.26-.2 12.86 12.86 0 012.26.18c1.27-.85 2.88-1.48 3.54-1.15.66.33.86 2.17.52 3.64A6.3 6.3 0 0119 9.75z"
      ></path>
    </svg>
  ),
  TwitterIcon: (props: LucideProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M20.96 5.255c.18-.41-.29-.756-.686-.545-.618.332-1.27.602-1.944.805-2.714-3.39-7.39-.536-6.699 3.12.022.118-.066.233-.187.23-2.542-.047-4.337-.874-6.069-2.823-.246-.277-.681-.264-.867.056-1.144 1.969-3.97 8.074 3.298 10.523-1.421.964-3.275 1.784-4.225 2.175-.235.097-.245.43-.014.535 9.483 4.272 18.713-1.95 15.79-11.742a7.481 7.481 0 001.604-2.334z"
      ></path>
    </svg>
  ),
  // logo: (props: LucideProps) => (
  //   <svg {...props} viewBox="0 0 512 512">
  //     <path
  //       style={{ fill: "#EBF0FA" }}
  //       d="M446.575,512H65.425C29.35,512,0,482.65,0,446.575V65.425C0,29.35,29.35,0,65.425,0h381.15
  //       C482.65,0,512,29.35,512,65.425v381.149C512,482.65,482.65,512,446.575,512z"
  //     />
  //     <path
  //       style={{ fill: "#DCE1EB" }}
  //       d="M446.575,0H256.004v512h190.571C482.65,512,512,482.65,512,446.575V65.425
  //       C512,29.35,482.65,0,446.575,0z"
  //     />
  //     <path
  //       style={{ fill: "#AAC85A" }}
  //       d="M410.155,191.597c-0.025-0.032-0.052-0.065-0.078-0.098c-7.117-8.764-17.666-14.122-28.942-14.701
  //       c-11.268-0.57-22.317,3.672-30.295,11.662l-138.007,138.22l-51.59-42.839c-14.959-12.422-36.563-12.293-51.373,0.308
  //       c-0.031,0.027-0.063,0.054-0.094,0.081L0,379.215v67.358c0,36.076,29.35,65.425,65.425,65.425h381.15
  //       c36.076,0,65.425-29.349,65.425-65.425V319.154L410.155,191.597z"
  //     />
  //     <path
  //       style={{ fill: "#6EAA50" }}
  //       d="M410.077,191.5c-7.117-8.764-17.666-14.122-28.942-14.701c-11.268-0.57-22.317,3.672-30.295,11.662
  //       l-94.835,94.981V512h190.571C482.65,512,512,482.651,512,446.575V319.154L410.155,191.597
  //       C410.129,191.565,410.103,191.532,410.077,191.5z"
  //     />
  //     <path
  //       style={{ fill: "#AAC85A" }}
  //       d="M161.174,208.421c-40.095,0-72.713-32.619-72.713-72.713s32.619-72.713,72.713-72.713
  //       s72.713,32.62,72.713,72.713S201.269,208.421,161.174,208.421z"
  //     />
  //   </svg>
  // ),
  gitHub: (props: LucideProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
  plus: (props: LucideProps) => (
    <svg {...props} viewBox="0 0 512 512">
      <path d="m256 512c-141.164062 0-256-114.835938-256-256s114.835938-256 256-256 256 114.835938 256 256-114.835938 256-256 256zm0-480c-123.519531 0-224 100.480469-224 224s100.480469 224 224 224 224-100.480469 224-224-100.480469-224-224-224zm0 0" />
      <path d="m368 272h-224c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h224c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
      <path d="m256 384c-8.832031 0-16-7.167969-16-16v-224c0-8.832031 7.167969-16 16-16s16 7.167969 16 16v224c0 8.832031-7.167969 16-16 16zm0 0" />
    </svg>
  ),
  redx: (props: LucideProps) => (
    <svg {...props} viewBox="0 0 455.111 455.111">
      <circle
        style={{ fill: '#E24C4B' }}
        cx="227.556"
        cy="227.556"
        r="227.556"
      />
      <path
        style={{ fill: '#D1403F' }}
        d="M455.111,227.556c0,125.156-102.4,227.556-227.556,227.556c-72.533,0-136.533-32.711-177.778-85.333
          c38.4,31.289,88.178,49.778,142.222,49.778c125.156,0,227.556-102.4,227.556-227.556c0-54.044-18.489-103.822-49.778-142.222
          C422.4,91.022,455.111,155.022,455.111,227.556z"
      />
      <path
        style={{ fill: '#FFFFFF' }}
        d="M331.378,331.378c-8.533,8.533-22.756,8.533-31.289,0l-72.533-72.533l-72.533,72.533
          c-8.533,8.533-22.756,8.533-31.289,0c-8.533-8.533-8.533-22.756,0-31.289l72.533-72.533l-72.533-72.533
          c-8.533-8.533-8.533-22.756,0-31.289c8.533-8.533,22.756-8.533,31.289,0l72.533,72.533l72.533-72.533
          c8.533-8.533,22.756-8.533,31.289,0c8.533,8.533,8.533,22.756,0,31.289l-72.533,72.533l72.533,72.533
          C339.911,308.622,339.911,322.844,331.378,331.378z"
      />
    </svg>
  ),
  tieIcon: (props: LucideProps) => (
    <svg
      width="64"
      height="64"
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 32 32"
      id="tie"
    >
      <polygon
        fill="#b72732"
        points="19.32 7.14 18.77 9.91 18.77 9.92 18.6 10.73 17.99 13.79 14.01 13.79 13.4 10.72 13.23 9.91 12.68 7.14 19.32 7.14"
      ></polygon>
      <path
        fill="#e0e0e2"
        d="M8.90006,1.16408l7.09918,5.97928L12.53431,10.6083A2,2,0,0,1,9.41478,10.239L5.8473,4.41695a1,1,0,0,1,.06858-1.14313L7.47179,1.30827A1,1,0,0,1,8.90006,1.16408Z"
      ></path>
      <path
        fill="#991d1f"
        d="M16.5,7.64l-2.97,2.97a.68974.68974,0,0,1-.13.11l-.17-.81L15.5,7.64l.5-.5Z"
      ></path>
      <path
        fill="#991d1f"
        d="M18.77,9.91v.01l-.17.81a.80526.80526,0,0,1-.14-.12L16,8.14l-.5-.5.5-.5.5.5Z"
      ></path>
      <path
        fill="#e0e0e2"
        d="M15.99925,7.14336l7.10048-5.97943a1,1,0,0,1,1.42819.1442L26.084,3.27373A1,1,0,0,1,26.15256,4.417l-3.56874,5.82246a2,2,0,0,1-3.1194.36906Z"
      ></path>
      <polygon
        fill="#e5303e"
        points="19.287 27.556 15.999 31.5 12.713 27.556 14.028 13.786 17.972 13.786 19.287 27.556"
      ></polygon>
    </svg>
  ),
  mirrorIcon: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      enable-background="new 0 0 64 64"
      viewBox="0 0 64 64"
      id="mirror"
    >
      <path
        fill="#F7C292"
        d="M19 30.25h-3.002c-.276 0-.5-.224-.5-.5s.224-.5.5-.5H19c.276 0 .5.224.5.5S19.276 30.25 19 30.25zM48.002 30.25H45c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h3.002c.276 0 .5.224.5.5S48.278 30.25 48.002 30.25z"
      ></path>
      <path
        fill="#FFD2A6"
        d="M45,0.25H19c-0.276,0-0.5,0.224-0.5,0.5v54c0,0.276,0.224,0.5,0.5,0.5h26c0.276,0,0.5-0.224,0.5-0.5v-54
                C45.5,0.474,45.276,0.25,45,0.25z"
      ></path>
      <path
        fill="#F7C292"
        d="M45.5.75c0-.276-.224-.5-.5-.5h-.207l-4.854 4.854c-.195.195-.195.512 0 .707.098.098.226.146.354.146s.256-.049.354-.146L45.5.957V.75zM18.5.75c0-.276.224-.5.5-.5h.207l4.854 4.854c.195.195.195.512 0 .707-.098.098-.226.146-.354.146s-.256-.049-.354-.146L18.5.957V.75zM45.5 54.75c0 .276-.224.5-.5.5h-.207l-4.854-4.854c-.195-.195-.195-.512 0-.707.098-.098.226-.146.354-.146s.256.049.354.146l4.854 4.854V54.75zM18.5 54.75c0 .276.224.5.5.5h.207l4.854-4.854c.195-.195.195-.512 0-.707-.098-.098-.226-.146-.354-.146s-.256.049-.354.146L18.5 54.543V54.75z"
      ></path>
      <rect width="22" height="50" x="21" y="2.75" fill="#5D9CEC"></rect>
      <path
        fill="#656D78"
        d="M17 63.25c0 .275-.225.5-.5.5h-1c-.275 0-.5-.225-.5-.5v-1c0-.275.225-.5.5-.5h1c.275 0 .5.225.5.5V63.25zM49 63.25c0 .275-.225.5-.5.5h-1c-.275 0-.5-.225-.5-.5v-1c0-.275.225-.5.5-.5h1c.275 0 .5.225.5.5V63.25z"
      ></path>
      <rect width="30" height="2" x="17" y="57.75" fill="#F7C292"></rect>
      <polygon
        fill="#87BCF4"
        points="23.231 52.75 26.337 52.75 39.734 2.75 36.628 2.75"
      ></polygon>
      <polygon
        fill="#87BCF4"
        points="27.373 52.75 40.77 2.75 40.252 2.75 26.854 52.75"
      ></polygon>
      <rect width="2" height="37.5" x="15" y="24.75" fill="#FFD2A6"></rect>
      <rect width="2" height="37.5" x="47" y="24.75" fill="#FFD2A6"></rect>
      <path
        fill="#FFD2A6"
        d="M16.5 25.25h-.999c-.276 0-.5-.224-.5-.5s.224-.5.5-.5H16.5c.276 0 .5.224.5.5S16.776 25.25 16.5 25.25zM48.5 25.25h-.999c-.276 0-.5-.224-.5-.5s.224-.5.5-.5H48.5c.276 0 .5.224.5.5S48.776 25.25 48.5 25.25z"
      ></path>
    </svg>
  ),
  coatIcon: (props: LucideProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" id="womans">
      <g fill="hsl(var(--custom-front-bg))">
        <path d="m27.657 14.114 3.594 21.178 4.595-21.078c-6.089-1.508-8.189-.1-8.189-.1zM38.161 26.103l-.873-.804a.551.551 0 0 1 .075-.861l2.291-1.453-2.692-7.841-.412-.412-3.61 17.036c1.839-2.611 4.212-4.79 5.221-5.665zM25.448 24.438a.554.554 0 0 1 .246.413.538.538 0 0 1-.172.448l-.9.829c.992.955 3.438 3.447 5.258 6.31l-3.016-17.694-.484.484c-.004.016-.002.033-.01.052l-3.191 7.719 2.269 1.439z"></path>
        <path d="m49.863 49.693 6.601-2.807-11.358-28.9-6.793-2.267 2.518 7.318c.078.237-.01.5-.229.637l-2.056 1.304.81.742a.551.551 0 0 1-.027.823c-.055.047-5.324 4.372-7.135 8.741l-.424 2-.164 13.173.018.103s-.201 1.586 1.059 1.569l1.789-.134 8.506-.673c-.416-11.945-.389-19.556-.389-19.556l7.274 17.927zm.515-2.636c.313 0 .565.254.565.563 0 .313-.254.569-.565.569s-.567-.256-.567-.569c0-.309.253-.563.567-.563zm-17.44-2.548zm0-6.536a.565.565 0 1 1 0-1.132.565.565 0 1 1 0 1.132zM23.46 26.523a.555.555 0 0 1-.178-.401c0-.153.066-.298.176-.401l.807-.742-2.055-1.304a.54.54 0 0 1-.211-.667l2.996-7.247-6.666 2.227L6.19 46.877l6.473 2.771 7.547-17.794s-.188 8.037.166 19.949l8.574.327s1.137.019 1.551-.889l.01-.199.18-13.87-.195-1.134c-1.649-4.544-6.979-9.462-7.036-9.515zM12.169 47.971a.567.567 0 1 1-.003-1.133.567.567 0 0 1 .003 1.133z"></path>
      </g>
    </svg>
  ),
}