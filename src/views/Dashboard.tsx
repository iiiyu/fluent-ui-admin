import React from 'react';
import {Nav, INavStyles, INavLinkGroup} from '@fluentui/react/lib/Nav';
import {
  Breadcrumb,
  IBreadcrumbItem,
  IDividerAsProps,
} from '@fluentui/react/lib/Breadcrumb';
import {Label, ILabelStyles} from '@fluentui/react/lib/Label';
import {TooltipHost} from '@fluentui/react/lib/Tooltip';
import {Icon} from '@fluentui/react/lib/Icon';

const labelStyles: Partial<ILabelStyles> = {
  root: {margin: '10px 0', selectors: {'&:not(:first-child)': {marginTop: 24}}},
};

const items: IBreadcrumbItem[] = [
  {text: 'Files', key: 'Files', onClick: _onBreadcrumbItemClicked},
  {text: 'Folder 1', key: 'f1', onClick: _onBreadcrumbItemClicked},
  {text: 'Folder 2', key: 'f2', onClick: _onBreadcrumbItemClicked},
  {text: 'Folder 3', key: 'f3', onClick: _onBreadcrumbItemClicked},
  {text: 'Folder 4 (non-clickable)', key: 'f4'},
  {text: 'Folder 5', key: 'f5', onClick: _onBreadcrumbItemClicked},
  {text: 'Folder 6', key: 'f6', onClick: _onBreadcrumbItemClicked},
  {text: 'Folder 7', key: 'f7', onClick: _onBreadcrumbItemClicked},
  {text: 'Folder 8', key: 'f8', onClick: _onBreadcrumbItemClicked},
  {text: 'Folder 9', key: 'f9', onClick: _onBreadcrumbItemClicked},
  {text: 'Folder 10', key: 'f10', onClick: _onBreadcrumbItemClicked},
  {
    text: 'Folder 11',
    key: 'f11',
    onClick: _onBreadcrumbItemClicked,
    isCurrentItem: true,
  },
];

const navStyles: Partial<INavStyles> = {
  root: {
    boxSizing: 'border-box',
    border: '1px solid #eee',
    overflowY: 'auto',
  },
  // these link styles override the default truncation behavior
  link: {
    whiteSpace: 'normal',
    lineHeight: 'inherit',
  },
};

// adding an empty title string to each link removes the tooltip;
// it's unnecessary now that the text wraps, and will not truncat;
const navLinkGroups: INavLinkGroup[] = [
  {
    name: 'Basic components',
    expandAriaLabel: 'Expand Basic components section',
    collapseAriaLabel: 'Collapse Basic components section',
    links: [
      {
        key: 'ActivityItem',
        name: 'ActivityItem',
        url: '#/examples/activityitem',
      },
      {
        key: 'Breadcrumb',
        name: 'Breadcrumb',
        url: '#/examples/breadcrumb',
      },
      {
        key: 'Button',
        name: 'Button',
        url: '#/examples/button',
      },
      {
        name: 'Home',
        url: 'http://example.com',
        expandAriaLabel: 'Expand Home section',
        collapseAriaLabel: 'Collapse Home section',
        title: '',
        links: [
          {
            name: 'Activity',
            url: 'http://msn.com',
            key: 'key1',
            target: '_blank',
            title: '',
          },
          {
            name: 'MSN',
            url: 'http://msn.com',
            disabled: true,
            key: 'key2',
            target: '_blank',
            title: '',
          },
        ],
        isExpanded: true,
      },
    ],
  },
  {
    name: 'Extended components',
    expandAriaLabel: 'Expand Extended components section',
    collapseAriaLabel: 'Collapse Extended components section',
    links: [
      {
        key: 'ColorPicker',
        name: 'ColorPicker',
        url: '#/examples/colorpicker',
      },
      {
        key: 'ExtendedPeoplePicker',
        name: 'ExtendedPeoplePicker',
        url: '#/examples/extendedpeoplepicker',
      },
      {
        key: 'GroupedList',
        name: 'GroupedList',
        url: '#/examples/groupedlist',
      },
    ],
  },
  {
    name: 'Utilities',
    expandAriaLabel: 'Expand Utilities section',
    collapseAriaLabel: 'Collapse Utilities section',
    links: [
      {
        key: 'FocusTrapZone',
        name: 'FocusTrapZone',
        url: '#/examples/focustrapzone',
      },
      {
        key: 'FocusZone',
        name: 'FocusZone',
        url: '#/examples/focuszone',
      },
      {
        key: 'MarqueeSelection',
        name: 'MarqueeSelection',
        url: '#/examples/marqueeselection',
      },
    ],
  },
];

function _onBreadcrumbItemClicked(
  ev?: React.MouseEvent<HTMLElement, MouseEvent> | undefined,
  item?: IBreadcrumbItem | undefined
): void {
  console.log(`Breadcrumb item with key "${item?.key}" has been clicked.`);
}

function _getCustomDivider(dividerProps: IDividerAsProps): JSX.Element {
  const tooltipText = dividerProps.item ? dividerProps.item.text : '';
  return (
    <TooltipHost
      content={`Show ${tooltipText} contents`}
      calloutProps={{gapSpace: 0}}
    >
      <span aria-hidden="true" style={{cursor: 'pointer', padding: 5}}>
        /
      </span>
    </TooltipHost>
  );
}

function _getCustomOverflowIcon(): JSX.Element {
  return <Icon iconName={'ChevronDown'} />;
}

function Dashboard() {
  return (
    <div className="">
      <header className="bg-blue-600 w-full py-3 fixed top-0 right-0">
        <div>
          <div>hello dashboard!</div>
        </div>
      </header>
      <nav className="border-r border-gray-100 h-full top-12 fixed w-60 overflow-y-auto">
        <Nav
          selectedKey="key6"
          ariaLabel="Nav example with wrapped link text"
          groups={navLinkGroups}
        />
      </nav>
      <main className="mt-12 ml-60 h-full fixed">
        <div className="fixed w-full h-auto">
          <Breadcrumb
            items={items}
            maxDisplayedItems={10}
            ariaLabel="Breadcrumb with items rendered as buttons"
            overflowAriaLabel="More links"
            className="my-1"
          />
        </div>

        <div className="p-6 overflow-y-auto mt-12 h-full">
          Lorem ipsum dolor sit amet, eam cu tota tation, quo no consulatu
          imperdiet intellegebat. Et apeirian legendos maiestatis duo, sint
          magna nullam duo in. Eam ne congue apeirian. Ludus iudico sanctus qui
          te, est et case vidisse quaeque, at liberavisse comprehensam eam. Ad
          sit odio aperiri epicuri, debet altera accumsan an sea. Ut natum
          partem animal usu, mei doctus lobortis efficiendi id. Elit inimicus
          cum ei. Choro ancillae maluisset ius ad. Per an solum falli. No vel
          viderer forensibus, civibus ullamcorper eam no. Liber legimus
          intellegebat sed ex, at labores nusquam voluptatibus qui, ea vel natum
          detracto consulatu. Ea cum nostro verear viderer, eros quando at sed,
          graeci repudiare sea no. Nam iudicabit deterruisset ei, sumo postulant
          neglegentur cu est. Sit appetere nominati posidonium ne, usu at
          tibique facilisis. Sint quodsi copiosae usu te. Mutat facete cum id,
          id vix vitae voluptatum. Ex pro discere similique concludaturque.
          Ridens denique his no, te iusto temporibus vix. Cum iuvaret tacimates
          suscipiantur ei. Ad congue denique concludaturque ius, no cetero
          saperet reformidans per, ius ei eius propriae. Duo ut liber ornatus
          inimicus, nam ei velit nonumes eleifend, mei dicunt diceret
          accommodare id. Virtute dolorem eu est. Clita accumsan voluptaria mea
          ex, an mei falli mnesarchum sententiae. Cu erant consul discere has.
          Pri euismod legimus ei, usu ea mundi vidisse constituto. An dolore
          vocibus nec, sea vero efficiantur in, in sit tation utinam omnium. Ex
          per ubique insolens, ea euismod fastidii vix, vel quis adhuc deleniti
          eu. Qui eu nominavi rationibus, id vis cibo modus possim. Eu illud
          semper abhorreant vix, at eos idque facilisis. His altera nostrud
          honestatis ei, eu eos clita animal. Ex deleniti intellegam sit, in vel
          quem ridens veritus. Usu nominati vituperata et, vim recteque
          delicatissimi cu. Quo ubique disputando ut, an pro vivendum recteque
          disputationi. Te viris munere deleniti nam, electram contentiones qui
          eu. Duis accusam consequuntur in usu, partem graeco appetere ad vel.
          Explicari corrumpit nec no, nonumy interesset duo ex, est ex paulo
          munere numquam. Vel eius tritani ex, id nec explicari incorrupte
          definitiones. Quo ex inani facilisis comprehensam, odio vocent
          incorrupte ne vis. An duo viderer indoctum. Ea cum dolorum pericula
          erroribus, ad ullum nihil posidonium pri. Eum cetero adversarium ei,
          eu eam deseruisse elaboraret. Perfecto elaboraret sadipscing per ad,
          pri et zril vidisse molestiae. Id tale ipsum debitis cum, fabellas
          salutatus scriptorem his id. No erat probo ancillae eos. No usu
          volumus constituam, dolorum praesent an per. Viris eligendi honestatis
          pri ex, duo falli error definiebas in, vix ne ullamcorper
          comprehensam. Quem sadipscing ea vim. Per ne aeterno deseruisse. Est
          iusto quaerendum instructior te, ut sea aeque dolor delenit. Enim
          regione platonem ut sit. Dolore forensibus ei nam, vidit scaevola et
          ius. Mel ei ullum sanctus neglegentur. Liber bonorum intellegat mel
          et. Qui te accusam conceptam, an tale oporteat definiebas eos. Has
          viderer detracto necessitatibus ex, eos vidit repudiare ex. Quo cu
          aperiam electram. Mel ne elitr nobis. Mel cu porro appetere, in mei
          sale molestie appellantur. Est ullum accusata senserit ne, pri ex
          utinam efficiendi. Te populo petentium has, at timeam utamur nam. No
          utamur omnesque moderatius est, cu erat scaevola has. Cum at putant
          eripuit suscipit, ut sapientem persequeris quo. Mollis nominati
          democritum ne eos, ut eos diceret definiebas repudiandae, ea qui assum
          honestatis. Pro at graeci delenit invidunt. Ex zril disputando
          deterruisset vix, vix inani copiosae no. Vis mucius alienum expetenda
          ei. Vis in iriure prompta. Paulo ignota feugiat ei his, adipisci
          periculis vulputate at quo, ferri indoctum iracundia ne his. Cu his
          bonorum adversarium, facer referrentur ne per, sit id assum veritus
          explicari. Sed ei ludus tractatos cotidieque, dicam tation possim vix
          ad. Vix labore epicuri praesent te. Ad sed ferri adipisci sensibus,
          purto semper graecis sit et. Nam diceret aliquid fabellas ex, tempor
          albucius voluptatibus id vix. Nihil ubique cu eos. Eos in option
          prodesset. In mucius philosophia vim, mea an nulla timeam corpora. Pri
          facilisi intellegebat ad. His percipitur definitionem ne, ex recusabo
          maluisset qui. In sed agam tantas latine. Cum nibh scaevola expetendis
          an. An sit quem insolens consectetuer, mea debitis dissentiunt ne. Pro
          ipsum facilisi complectitur ex, pri legimus neglegentur ad, eu mel
          perfecto consequat. Ad quem dissentiet eam, duo doming latine percipit
          ei. Ea probo doctus sea. Petentium intellegebat voluptatibus qui id.
          Ut mel vocent hendrerit adipiscing, ei accusata iracundia qui. An
          postulant reprehendunt vel, qui at quodsi albucius voluptatum. Sed
          populo vocent quaeque in, brute volutpat similique per in, cu quot
          utroque eos. In nam reque doctus oblique. Vis quando vocent in, te qui
          movet sanctus gloriatur. Nec et epicurei phaedrum electram, ei illud
          expetenda mea. Mea et minim saepe option, eam in iusto molestiae. Erat
          vocent consequuntur in mei, sed ne semper vituperata intellegebat.
          Assum suscipit iudicabit cu has, ne maiorum molestiae vel, usu dolore
          maluisset inciderint no. Congue inimicus ea sed, aeque expetenda ei
          est. Qui eu denique sadipscing, est magna philosophia id. Pro eu
          aperiri aliquid, eum commodo alterum lucilius at, cu aliquip euismod
          eleifend mei. Usu ex ornatus voluptatum, pri no dictas eirmod
          explicari. Ne veniam dolore menandri sit. Labitur nusquam
          concludaturque eos ex, pri errem percipitur reprehendunt et, eu iusto
          mundi per. Quem laudem ne sed. Ne per noster oporteat. Vel alia
          invidunt an, ut vim movet utinam soleat, unum ridens euripidis te sea.
          At quem graeci sit, cibo postea ad mea. In habeo verear mel, sed iusto
          patrioque cu, cum an habeo liber adipiscing. Qui tollit debitis eu, ad
          usu molestie appareat. Et falli accusata intellegam cum, ius alii
          errem nostrud ex, duis exerci ut eam. Mel delectus perpetua ut. Ut qui
          facer dicta. Id vis case lobortis. Nec audiam delenit cu. Est id
          facete qualisque evertitur, splendide gloriatur cum ea. Percipit
          vituperata posidonium cum ne, pro tibique consetetur ne. Semper
          graecis vix ne. Vis numquam denique fastidii ne, te eum admodum
          nominati. Ius quem sint reprehendunt cu. Ut graece aliquam percipitur
          usu, cu qui aliquam meliore, quod mucius ea est. Graece nemore
          detraxit no duo, pro posse discere molestie id, ex sit unum erant
          dicam. Vero iudico honestatis mei no, utinam liberavisse ei duo. Ea
          dicam dicant utroque usu, meis explicari eu pro. Ea eum etiam summo
          labores. Discere sapientem accommodare ei mea, in ius alii zril. Sed
          hinc perfecto periculis te, harum altera delicata qui at. An justo
          ludus sea, ius ne harum movet vituperatoribus. Simul equidem consequat
          ea eam, cu graeco assueverit sea, at admodum detraxit vel. Errem
          ubique dissentias at pri, mea mundi laoreet ancillae ex, vel commodo
          voluptaria incorrupte ei. Aliquam percipit accusata quo te, et sit
          habeo nonumy scriptorem. Te malis ponderum verterem mel, pri an odio
          meis nulla, erant appareat concludaturque vix in. An duo zril putant,
          his semper admodum at, ea nullam sanctus pri. Forensibus definitiones
          vim te, aeque pericula suavitate cum ne, mentitum salutatus
          interpretaris usu in. Mei ut cotidieque philosophia, eum eu alterum
          definitiones, sed id inimicus inciderint concludaturque. Vero
          petentium suscipiantur ad nec, putent mollis splendide ex qui. Velit
          dicunt an sed. Ferri persecuti ei nam, ut munere impedit euripidis
          has. Et nec legere prodesset, tantas ornatus accusamus ne mel. Pri ei
          congue quidam aperiri, no est postea aliquid delicata. Ex diam
          sapientem est. Tation legimus mea in. Verterem legendos vix in, eam
          hinc partem ei, te audire denique sit. Purto eloquentiam usu et. Nam
          eu paulo labore scripserit, eu graece electram est. Dico placerat vim
          at. No nam aliquip alienum interesset, splendide accommodare eu his.
          Per ei iusto noluisse, has adolescens temporibus ad, vis mandamus
          sadipscing te. Mei brute nostrum ut, at eum quando electram
          disputando, vix no feugiat nominati convenire. Vix id illud
          neglegentur, duo cu paulo exerci necessitatibus. Vix euismod
          necessitatibus ei, aliquam patrioque est in. Cu laudem accusam per,
          vim saperet denique omittantur in, ea usu erant evertitur. Ea commune
          mandamus accommodare eam. Eam ei novum dicit, vel ei modus labore
          laboramus, illum utroque temporibus no quo. Ei unum integre sed, te
          diam abhorreant scriptorem eam. Has id facilis luptatum. Esse nusquam
          omittantur at has, ius ut feugiat invidunt assentior. Eam nibh erant
          nusquam ea, in zril putant accusamus has. Vix apeirian necessitatibus
          ut, augue nihil solet nec te. An pro quas laudem fierent, eu mel nobis
          vivendo principes. Has in audire liberavisse, ei incorrupte
          definitiones duo. Ius id clita animal aperiri. Ad usu invidunt
          scribentur. Et has incorrupte honestatis scripserit. Qui voluptua
          inciderint ad, mazim nominati pertinacia vix no. Augue instructior has
          eu, te mei efficiendi disputationi, sed definiebas assueverit ex.
          Falli ornatus convenire ea vix, ne mel etiam exerci veritus. Qui nisl
          modus an. Cu civibus fuisset moderatius vis. Per an porro etiam
          facilisi, te duo sale diceret liberavisse, duo veniam latine et. Ex
          mei dicant fabulas postulant. Labores detracto theophrastus sea ad,
          vis ad omnis brute electram, quo ad wisi delectus. Vix in vivendo
          erroribus accommodare, ea ius mollis legimus, wisi debet euismod no
          mel. Usu id inani ancillae. Ut nisl mazim mel, putent eirmod
          repudiandae nec ut, ex has nominavi voluptatibus. Et eum nibh delectus
          reprimique. Per no choro semper referrentur, vim assum dicant
          urbanitas te. Dolor civibus indoctum an has. Rebum eirmod ad pri,
          dicta intellegam ea pri. Elit alienum per in, usu meis animal docendi
          an. Autem erroribus te vix, id eam amet iusto detraxit, sale adhuc
          suavitate id eam. Te vel euismod aliquid antiopam. Id labore offendit
          usu. Nec summo tempor alterum ei, fugit omittantur eu per. Nec fuisset
          complectitur deterruisset an, erroribus dissentiunt vix te. Cu consul
          cetero voluptatibus mea. Vix tollit patrioque ea, virtute feugait
          patrioque usu ex. Mea et assum laudem cetero. Facer minimum ut sit,
          pro postulant ocurreret an, et dico nostrud pro. Vulputate adolescens
          suscipiantur in his, veniam dictas feugait vel ex. Te cum causae
          civibus vituperata, eam ornatus argumentum id, no eos movet ceteros.
          Constituto argumentum an duo. An sea mentitum apeirian rationibus,
          quis constituto in mea. Affert copiosae accusamus vim id, duis porro
          debitis at cum. Per tantas labores in. Viris salutatus no vix. Per cu
          putent facete splendide. Id usu autem ponderum. Duo delectus molestiae
          ea, ne possit probatus inimicus mel. Mea te vivendo intellegam, in
          simul mentitum repudiandae qui. Te harum meliore molestie vis, causae
          eligendi delectus sed ut. Sea cu populo melius hendrerit, vis wisi
          partem repudiare ne. Et duo sententiae voluptatibus, omnes tritani id
          sea. Reque percipitur eos ex, id has nulla facete. Te oratio
          pertinacia disputationi pro, mutat iuvaret salutatus et cum, eos no
          alii iriure utamur. Eius regione delenit ad his. Sed rebum vituperata
          ei, semper definiebas efficiantur sed ea, duo commodo argumentum
          reprimique id. Nibh graece postea mei eu, has liber dolore invidunt
          cu. Sint nullam per te. Vel ad tantas animal. Ornatus phaedrum
          dissentiet his cu, ut duo movet inermis sententiae. Elit falli commune
          eu sit. Regione omittantur eu pro, odio mentitum sed et. Sed eu dicit
          minimum, qui eu cibo alterum constituam. Sea ei exerci contentiones.
          An omnes dolore molestie eum. Eu est delenit mentitum, natum aperiri
          dignissim te sea. Eos ea quando primis, vis voluptua splendide ut. Ne
          ignota petentium nam. Eum at summo dolor. Cu incorrupte consequuntur
          vim. His ad enim deserunt imperdiet. Ponderum efficiantur
          mediocritatem ad vel. Tale prima vix an, nihil dissentiunt ne sit. Ius
          eu atqui salutatus. Possit ponderum duo cu, in mei movet munere
          conclusionemque, no qui novum nullam. Te altera mollis duo, tamquam
          propriae mel in. Per te inermis fabellas. No graeco nemore duo. Ex
          appellantur theophrastus usu, at prompta moderatius mel, te phaedrum
          sadipscing eum. Te usu volutpat imperdiet repudiandae, mel oblique
          eleifend eu. At ius veri impetus meliore, ipsum corrumpit an qui, mei
          no etiam aliquam intellegat. Maiorum suavitate ne pri, ne quidam
          noster salutandi has. At suavitate consetetur sed. Ius case labores
          at, no eos pertinax interesset. Munere nemore evertitur ad his, putant
          facilis his ad. Nonumy facete iriure ex eam, cum ex nihil iudicabit
          incorrupte, et veri noster qui. Vel eu nibh senserit posidonium, nihil
          debitis vim cu. Doctus ornatus salutandi id mei, mel an alienum
          facilisis. An utinam delenit nonumes mei. Vel ad commune constituto,
          id duo impedit eligendi. Mei convenire assentior at. Id eum magna
          lucilius suscipiantur. Ullum denique sententiae at pri, quo altera
          offendit neglegentur te. Populo dictas timeam quo id. Eum impetus
          menandri intellegat ad, ei amet quot elit mel, sed wisi laboramus eu.
          Qui in mucius aperiam ceteros, ei albucius apeirian accusata nam. Has
          malis graeci ei, mea quas accommodare te, ex sed munere omittantur
          definitionem. Has alii tota forensibus id, iusto elitr electram mea
          ei. Id simul definitionem mel, ut mea mollis antiopam. Per veritus
          insolens gubergren ei. Ei voluptatum interesset cotidieque his, id vel
          diceret maiestatis. Vim id mucius admodum, pri ut congue evertitur. Ad
          cum clita inermis, solet legimus deserunt te sed. Ex dicant lobortis
          hendrerit eos. Te denique accusata cum, et erant blandit appellantur
          usu. Populo fierent in eam. Nemore maiestatis pro ad, no euripidis
          interpretaris usu. Vel id rebum facer dolorem. Diam cetero urbanitas
          usu ea, nam elitr aliquando et, et tale quas eum. Mollis imperdiet duo
          ut, eam eu elitr recusabo. Ad ius doctus gubergren. Ex nam graece
          putant fuisset, detraxit efficiendi usu cu. Ius at consul ornatus. Id
          novum utinam aliquid est, mea ei ridens maiestatis, et populo
          sapientem democritum vis. Et tibique adolescens est. Dolor instructior
          ei ius, vim decore quodsi inciderint ea, tollit oporteat voluptatibus
          an pri. Mel idque diceret alienum cu, at inani affert quo. No decore
          voluptatibus vis. Pri ut omnes albucius recteque. Ne mea oportere
          intellegebat, vide iriure necessitatibus vix ne. Has nibh pertinax te,
          vel semper denique at, habeo moderatius disputando an qui. Mea vidisse
          consulatu urbanitas ne. Ius ut luptatum invidunt convenire, ceteros
          reformidans pri eu, no suas accusam scripserit vim. Cu eos quot
          nostrud scriptorem, corpora antiopam honestatis id per. Ad per
          dignissim hendrerit, ad suas sint luptatum usu. Inermis voluptua ut
          has, praesent signiferumque eu nam. Veri integre aliquid eam no, magna
          inermis ex vis. Ex modo voluptua mea, euismod moderatius eum in, cum
          ut solum populo. Pro populo fabulas admodum ea, constituto scripserit
          pri ex, porro errem iracundia no mea. Est at munere nostrud propriae.
          Facilisi liberavisse ad pri, ut animal minimum adversarium nec. Mel ne
          alienum oporteat, ea pri delectus imperdiet forensibus, mel te diam
          exerci consequuntur. An persius molestie ius, in usu semper iriure
          adipisci. At probo eleifend quo. Ad vis solet disputando. Ius dolorem
          oporteat deserunt te, ei assum referrentur suscipiantur his, modus
          erant deserunt eu vel. No erant rationibus vix, eum id vulputate
          argumentum. Sea te albucius menandri, ullum noster consulatu duo in.
          Te inani qualisque sea. Wisi eligendi voluptaria at sea. Mei
          quaerendum philosophia ex, graece nemore expetenda no qui, in magna
          novum salutandi nec. Sed iusto efficiantur ne. Eu porro nemore
          percipitur vel, impedit definitionem sea ne. At per mutat nostrum
          quaerendum, nulla populo commodo ad pro, ferri graeco nec id. Id vel
          nusquam vituperata, an nec amet nobis. Ea nobis evertitur vis, error
          deserunt at duo. Eos sanctus accumsan id, sit nostrum platonem ut,
          suas ocurreret ei cum. Omnesque splendide pro te. Nec appetere
          lucilius efficiantur id, ea fastidii suavitate ius. Solum sapientem ex
          qui, sea cu ornatus graecis mandamus. Sensibus pericula ut sit, no vis
          paulo graeco, an inimicus comprehensam cum. Cu mea unum reprimique.
          Mea diam solum cu, no quo quem enim elitr. Et sit novum utroque.
          Accusata interesset no pri, accusam lucilius no vim. Et fugit accumsan
          dignissim nam, nec quot decore mentitum eu. Eum ad semper commodo
          repudiandae, ad detracto suavitate mel. Id his cetero labores
          rationibus, ut
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
