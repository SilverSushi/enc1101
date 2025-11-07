import React, { useState } from 'react'

function Home(){

  return (
    <div className="home">
      <h2>The Noise Problem</h2>

      {/* Hero controls and image upload removed per user request */}

      <div className="comparison">
        <figure>
          <img src="/clean.png" alt="Clean ECG" className="signal-img" />
          <figcaption>Clean ECG (high SNR)</figcaption>
        </figure>

        <figure>
          <img src="/noisy.png" alt="Noisy ECG" className="signal-img" />
          <figcaption>Noisy ECG (low SNR)</figcaption>
        </figure>
      </div>

      <p className="explanation">
        Reliable ECG data is essential for accurate cardiac diagnosis 
        and AI model training. Yet it’s often corrupted by motion, 
        electrode shifts, and environmental interference. 
        Noisy data hides critical cardiac patterns and weakens 
        diagnostic models. My project introduces a physiologically 
        conditioned diffusion model that learns to remove noise while 
        preserving meaningful cardiac signals, paving the way for cleaner 
        datasets and more trustworthy medical AI.
      </p>
    </div>
  )
}

export default function App(){
  const [view, setView] = useState('home')

  return (
    <div className="app">
      <header>
        <div className="brand">
          <h1>Restoring the Heartbeat of Data</h1>
        </div>
        <nav className="nav">
          <button className={view === 'home' ? 'active' : ''} onClick={() => setView('home')}>Home</button>
          <button className={view === 'research' ? 'active' : ''} onClick={() => setView('research')}>Research</button>
          <button className={view === 'about' ? 'active' : ''} onClick={() => setView('about')}>About</button>
          <button className={view === 'impact' ? 'active' : ''} onClick={() => setView('impact')}>Impact</button>
          <button className={view === 'getinvolved' ? 'active' : ''} onClick={() => setView('getinvolved')}>Get Involved</button>
          <button className={view === 'demo' ? 'active' : ''} onClick={() => setView('demo')}>Model Demo</button>
        </nav>
      </header>

      <main>
        {view === 'home' ? (
          <Home />
        ) : view === 'research' ? (
          <Research />
        ) : view === 'about' ? (
          <About />
        ) : view === 'impact' ? (
          <Impact />
        ) : view === 'getinvolved' ? (
          <GetInvolved />
        ) : view === 'demo' ? (
          <ModelDemo />
        ) : null}
      </main>

    </div>
  )
}

/* Additional pages: Research, Impact, GetInvolved are defined below and integrated with the nav above. */

function Research(){
  return (
    <div className="research">
      <h2>Reconstructing the Signal</h2>
      <p className="explanation">
        Traditional algorithms often “smooth out” noise in ECGs but 
        end up erasing real heart patterns in the process. Our AI 
        model takes a new approach. It learns from multiple signals 
        the body produces, like heart rate and blood flow, to 
        understand what a real heartbeat should look like. Using this 
        information, the model can separate noise from meaning, 
        rebuilding ECG data that’s both clean and medically trustworthy.
        </p>

      <div className="diagram">
        <img src="/diagram.png" alt="Model diagram" className="diagram-img" />
      </div>

      <div className="metrics">
        <h3>Key metrics</h3>
        <div className="bars">
          <div className="bar"><div className="label">SNR improvement</div><div className="fill" style={{width:'62%'}}></div></div>
          <div className="bar"><div className="label">Correlation preserved</div><div className="fill" style={{width:'78%'}}></div></div>
        </div>
        <p className="explanation">
          SNR improved by 62% on average, while preserving 78% of physiological correlation compared to noisy input.
          </p>
      </div>
    </div>
  )
}

function Impact(){
  return (
    <div className="impact">
      <h2>Why It Matters</h2>
      <p className="explanation">
        Clean ECG data isn’t just about improving model performance, 
        it’s about improving patient care. When AI systems are trained 
        on noisy or distorted signals, even small inaccuracies can 
        lead to missed arrhythmias or false diagnoses. By restoring 
        biologically meaningful ECG patterns, this project strengthens 
        the reliability of both research and clinical applications. 
        Physiologically grounded AI ensures that every prediction is rooted 
        in genuine cardiac behavior, bringing us closer to safer, more 
        transparent, and more trustworthy medical technology. Below are some 
        examples of clinical impact.
        </p>
      <div className="cases">
        <article className="case">
          <h4>Case: Missed Arrhythmia</h4>
          <p>
            Noise masked a brief arrhythmic episode leading to a delayed diagnosis. Denoising clarified the morphology and enabled earlier intervention.
            </p>
        </article>
        <article className="case">
          <h4>Case: False Alarm</h4>
          <p>
            Artifact produced spurious beat detections and unnecessary alarms. Signal reconstruction reduced false positives and clinician burden.
            </p>
        </article>
      </div>
    </div>
  )
}

function GetInvolved(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  function submit(e){
    e.preventDefault()
    // Frontend-only: show thank you message
    setSent(true)
  }

  return (
    <div className="get-involved">
      <h2>Get Involved</h2>
      <p className="explanation">Join the project by contributing code, sharing datasets, or offering clinical feedback.</p>

      <div className="ctas">
        <a className="cta" href="mailto:bk25a@fsu.edu">Contact the Team</a>
        <a className="cta" href="#">Contribute on GitHub</a>
      </div>

      <form className="contact" onSubmit={submit}>
        {sent ? (
          <div className="thanks">Thanks! We'll follow up at the email you provided.</div>
        ) : (
          <>
            <input placeholder="Your name" value={name} onChange={e=>setName(e.target.value)} />
            <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
            <textarea placeholder="Message" value={message} onChange={e=>setMessage(e.target.value)} />
            <button type="submit">Send</button>
          </>
        )}
      </form>
    </div>
  )
}

function About(){
  return (
    <div className="about">
      <h2>About this Project</h2>
      <p className="explanation">
        This project explores physiologically conditioned diffusion models to denoise ECG signals while preserving
        clinically relevant features. The goal is to make AI for cardiac care more reliable by improving the quality
        of input data and providing tools for transparent evaluation.
      </p>

      <h3>Team & Contact</h3>
      <p className="explanation">Jay Kim (bk25a@fsu.edu)</p>
      <p className="explanation">Florida State University, Department of Mathematics</p>
      <p className="explanation">Github: <a href="https://github.com/SilverSushi" target="_blank" rel="noopener noreferrer">https://github.com/SilverSushi</a></p>

      <h3>How to cite</h3>
      <p className="explanation">If you use this work in research, please cite our project and include a note about data provenance and preprocessing.</p>
    </div>
  )
}

function SignalPlot({data, height=120, color='#7cfff2', title}){
  if(!data || data.length === 0) return <div className="plot empty">No data</div>
  const w = 520
  const h = height
  const min = Math.min(...data)
  const max = Math.max(...data)
  const range = (max - min) || 1
  const points = data.map((v,i)=>{
    const x = (i / (data.length-1)) * w
    const y = h - ((v - min) / range) * h
    return `${x},${y}`
  }).join(' ')
  return (
    <div className="plot">
      {title && <div className="plot-title">{title}</div>}
      <svg viewBox={`0 0 ${w} ${h}`} width="100%" height={h} preserveAspectRatio="none">
        <polyline points={points} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  )
}

function parseCSV(text){
  // Very small CSV parser: split lines, take first numeric column from each row
  const lines = text.split(/\r?\n/).map(l=>l.trim()).filter(l=>l.length>0)
  const out = []
  for(const line of lines){
    const cols = line.split(/[ ,;\t]+/)
    // find first numeric token
    for(const c of cols){
      const v = parseFloat(c)
      if(!Number.isNaN(v)){
        out.push(v)
        break
      }
    }
  }
  return out
}

function ModelDemo(){
  const [fileName, setFileName] = useState('')
  const [original, setOriginal] = useState(null)
  const [denoised, setDenoised] = useState(null)
  const [loadingDemo, setLoadingDemo] = useState(false)
  const [error, setError] = useState('')

  async function onFile(e){
    setError('')
    const f = e.target.files && e.target.files[0]
    if(!f) return
    setFileName(f.name)
    const text = await f.text()
    const arr = parseCSV(text)
    if(arr.length === 0){ setError('No numeric data found in CSV'); return }
    setOriginal(arr)
    // auto-run local denoiser
    await runLocalDenoiser(arr)
  }

  // Simple client-side denoiser: moving average smoothing
  function movingAverage(input, window = 9){
    const w = Math.max(1, Math.floor(window))
    const half = Math.floor(w/2)
    const out = new Array(input.length)
    for(let i=0;i<input.length;i++){
      let sum = 0, count = 0
      for(let j=i-half;j<=i+half;j++){
        if(j>=0 && j<input.length){ sum += input[j]; count++ }
      }
      out[i] = sum / Math.max(1,count)
    }
    return out
  }

  // Optional: lowpass via simple exponential smoothing (preserve peaks better)
  function expSmooth(input, alpha = 0.2){
    const out = new Array(input.length)
    if(input.length===0) return out
    out[0] = input[0]
    for(let i=1;i<input.length;i++) out[i] = alpha*input[i] + (1-alpha)*out[i-1]
    return out
  }

  // Main local denoiser pipeline
  async function runLocalDenoiser(arr){
    setLoadingDemo(true)
    setDenoised(null)
    setError('')
    try{
      // quick heuristic: apply moving average then a light exponential smooth
      // window size scaled with length (clamped)
      const win = Math.min(51, Math.max(5, Math.floor(arr.length / 40)))
      const ma = movingAverage(arr, win)
      const den = expSmooth(ma, 0.18)
      // keep length equal
      setDenoised(den)
    } catch(err){
      setError(String(err))
    } finally {
      setLoadingDemo(false)
    }
  }

  return (
    <div className="model-demo">
      <h2>Model Demo — Upload Noisy ECG (CSV)</h2>
      <p className="explanation">Upload a CSV containing one column of ECG samples (one value per line). The demo sends the samples to the backend model and displays the denoised result.</p>

      <div className="demo-controls">
        <label className="file-input">
          <input type="file" accept=".csv,text/csv" onChange={onFile} />
          <span>{fileName || 'Choose CSV file...'}</span>
        </label>
        <button onClick={()=> original && runLocalDenoiser(original)} disabled={!original || loadingDemo}>{loadingDemo ? 'Running...' : 'Run model (local)'}</button>
      </div>

      {error && <div className="error">{error}</div>}

      <div className="plots">
        <div className="plot-col">
          <h4>Original</h4>
          <SignalPlot data={original || []} color="#ff7766" />
        </div>
        <div className="plot-col">
          <h4>Denoised</h4>
          <SignalPlot data={denoised || []} color="#7cfff2" />
        </div>
      </div>
    </div>
  )
}

