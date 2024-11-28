"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"

export function AccessibilitySettings() {
  const [highContrast, setHighContrast] = useState(false)
  const [largeText, setLargeText] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [fontSize, setFontSize] = useState(16)

  const applySettings = () => {
    document.body.classList.toggle('high-contrast', highContrast)
    document.body.classList.toggle('large-text', largeText)
    document.body.classList.toggle('reduced-motion', reducedMotion)
    document.documentElement.style.fontSize = `${fontSize}px`
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Accessibility Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="high-contrast">High Contrast</Label>
          <Switch
            id="high-contrast"
            checked={highContrast}
            onCheckedChange={(checked) => {
              setHighContrast(checked)
              applySettings()
            }}
          />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="large-text">Large Text</Label>
          <Switch
            id="large-text"
            checked={largeText}
            onCheckedChange={(checked) => {
              setLargeText(checked)
              applySettings()
            }}
          />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="reduced-motion">Reduced Motion</Label>
          <Switch
            id="reduced-motion"
            checked={reducedMotion}
            onCheckedChange={(checked) => {
              setReducedMotion(checked)
              applySettings()
            }}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="font-size">Font Size</Label>
          <Slider
            id="font-size"
            min={12}
            max={24}
            step={1}
            value={[fontSize]}
            onValueChange={(value) => {
              setFontSize(value[0])
              applySettings()
            }}
          />
          <p className="text-sm text-muted-foreground">{fontSize}px</p>
        </div>
      </CardContent>
    </Card>
  )
}

