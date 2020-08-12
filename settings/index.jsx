function clockSettings(props) {
  return (
    <Page>
      <Section title={<Text bold align="center">Settings</Text>}>
        <ColorSelect settingsKey="bgColor"
          label="Background Color"
          colors={[
            { color: 'deepskyblue' },
            { color: 'gold' }
          ]}
          />
        <Select 
          label="Distance Unit"
          seetingsKey="unit"
          options={[
            {name: "meters", value:"m"},
            {name: "kilometers", value:"km"},
            {name: "miles", value: "mi"},
            {name: "feet", value: "ft"}
          ]}/>
      </Section>
    </Page>
  )
}

registerSettingsPage(clockSettings);