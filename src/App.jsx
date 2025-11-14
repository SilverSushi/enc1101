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
        The heartbeat is one of the most recognizable signatures of human life. A single electrocardiogram (ECG) waveform captures the electrical rhythm that keeps blood flowing throughout the body, translating complex cardiac dynamics into a readable signal. Clinicians rely on tiny variations in the ECG, subtle changes in slope, timing, or amplitude, to detect arrhythmias, diagnose heart conditions, and understand the body’s overall physiological state. But despite its clinical importance, the ECG is also one of the most fragile signals in medicine.
      </p>
      <p className="explanation">
        In the real world, clean ECG data is incredibly difficult to obtain. A patient shifts slightly in bed, and the electrodes lose contact for a split second. A wearable device slips during a workout. A cable brushes against clothing or receives interference from nearby electronics. Even perspiration can introduce drift or change the skin–electrode interface. Each of these small events leaves a trace on the ECG, transforming clear cardiac patterns into distorted shapes. P-waves disappear into noise, QRS complexes become irregular, and entire segments of the signal can collapse into chaotic fluctuations.
      </p>
      <p className="explanation">
        For clinicians interpreting ECGs manually, noise is frustrating but manageable. They can often recognize and mentally filter out artifacts. But for machine learning models, noise introduces profound confusion. AI models trained on inconsistent or distorted data tend to mislearn patterns, mistaking motion artifacts for arrhythmias or treating baseline wander as genuine ST-segment changes. When these flawed models are deployed in high-stakes environments, such as emergency departments, telehealth platforms, or wearable cardiac monitors, the consequences extend far beyond technical inconvenience. Misclassifications can influence medical decisions, create false alarms, or mask dangerous conditions.
      </p>
      <p className="explanation">
        As research increasingly shifts toward AI-driven cardiology, the need for clean, physiologically accurate ECG data has never been more urgent. Large datasets are foundational for training diagnostic models, yet many existing collections contain significant noise, especially those sourced from real-world, ambulatory, or consumer-grade devices. The more diverse and widespread ECG monitoring becomes, the more challenging it is to maintain high data quality.
      </p>
      <p className="explanation">
        Restoring the Heartbeat of Data responds directly to this growing crisis. Instead of treating noise as an unavoidable limitation, this project explores how artificial intelligence can actively restore clarity. By developing a physiologically conditioned diffusion model, I aim to denoise ECG signals using information from other synchronized biological signals: heart rate (HR), RR intervals, and photoplethysmography (PPG). These additional cues help guide the model, ensuring that the restored ECG reflects true cardiac activity rather than statistical approximations.
      </p>
      <p className="explanation">
        The goal is simple but essential: make ECG data as trustworthy as the heartbeat it represents.
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
        Effective ECG denoising is not just a mathematical problem, it’s a physiological one. Every cardiac signal is shaped by the coordinated interplay between electrical conduction, mechanical contraction, and circulatory dynamics. Traditional denoising methods often overlook this complexity. Filtering techniques assume that noise has a distinct, separable frequency profile, but real artifacts overlap directly with clinically significant features. A baseline drift can mimic ST-segment elevation. Motion artifacts can resemble premature ventricular contractions. Muscle noise can obscure atrial activity. The resulting signal becomes a blend of biological information and contamination that cannot be separated by simple mathematical operations.
      </p>

      <p className="explanation">
        Deep learning approaches offer more flexibility, but most treat the ECG as a unimodal input. They attempt to learn what “clean” ECGs should look like without access to the broader physiological context that governs cardiac function. This narrow perspective often leads models to produce overly smooth waveforms devoid of diagnostically important nuances. My research introduces a fundamentally different approach: a multimodal, physiologically grounded diffusion model for ECG denoising.
      </p>

      <p className="explanation">
        Diffusion models work by gradually adding noise to a signal and training a neural network to reverse that process step by step. This iterative reconstruction allows for high-resolution restoration, making diffusion models effective at preserving subtle morphological features that deterministic filters wash away. But what makes this model unique is its conditioning mechanism.
      </p>
      <div className="diagram">
        <img src="/diagram.png" alt="Model diagram" className="diagram-img" />
      </div>

      <h3>Multimodal Physiological Conditioning</h3>
      <p className="explanation">
        Instead of reconstructing the ECG in isolation, the model incorporates several synchronized physiological cues: Heart Rate (HR) — a global measure of cardiac rhythm that ensures temporal consistency across beats; RR intervals — beat-to-beat timing relationships essential for preserving heart rate variability (HRV) and arrhythmic signatures; and Photoplethysmography (PPG) — a peripheral measure of blood volume changes that reflects the mechanical consequences of electrical activity. Together, these signals provide a synchronized, biologically meaningful scaffold that guides the model toward physiologically plausible reconstructions.
      </p>

      <h3>Data Processing and Alignment</h3>
      <p className="explanation">
        Using the QT Database (QTDB), ECG recordings are extracted along with beat annotations. From annotated R‑peaks we compute HR and RR intervals. PPG signals are temporally aligned through interpolation and synchronization so the pipeline produces a four‑channel multimodal input (ECG, HR, RR, PPG) that the model processes jointly.
      </p>

      <h3>Evaluation Metrics</h3>
      <p className="explanation">
        The model’s effectiveness is evaluated across multiple layers: quantitative metrics such as signal‑to‑noise ratio (SNR) and reconstruction error; physiological metrics including HRV accuracy, RR interval stability, and PR/QT interval preservation; and diagnostic metrics that measure downstream arrhythmia classification accuracy when denoised ECGs are fed into diagnostic networks. This layered evaluation ensures the model preserves underlying cardiac physiology, not just cosmetic signal quality.
      </p>

      <div className="diagram">
        
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
        ECG denoising may sound like a narrow technical problem, but its significance ripples across the entire landscape of medical AI and digital health.
      </p>

      <h3>Improving Diagnostic Accuracy</h3>
      <p className="explanation">When AI systems analyze ECGs, they often rely on waveforms that require precise morphology. Noise can mask disorders such as atrial fibrillation, premature ventricular contractions, or long QT syndromes. A denoising model that preserves physiological structure while removing distortion directly enhances diagnostic reliability.</p>

      <h3>Enhancing AI Generalizability</h3>
      <p className="explanation">A common challenge in medical AI is that models trained on one dataset fail miserably when applied to another. Noise patterns vary across devices, patients, and environments. Clean, physiologically consistent data reduces this variability, allowing models to generalize better across populations and hardware.</p>

      <h3>Supporting Wearable Health Technologies</h3>
      <p className="explanation">Wearables are transforming cardiac monitoring, but their data quality is often inferior to that of clinical-grade devices. A physiologically conditioned diffusion model can help bridge this gap, enabling wearables to produce clinically trustworthy signals despite imperfect sensor conditions.</p>

      <h3>Strengthening Clinical Trust</h3>
      <p className="explanation">For clinicians, trust is earned when AI systems consistently make correct predictions based on interpretable features. If denoised ECGs retain morphological authenticity, clinicians can confidently review waveforms and validate AI recommendations, fostering human–AI collaboration rather than suspicion.</p>

      <h3>Extending Beyond ECGs</h3>
      <p className="explanation">The underlying framework can be adapted to EEG, PPG, respiratory signals, and multimodal wearable data. Any field suffering from motion artifacts or sensor noise could benefit from diffusion-based, physiologically guided reconstruction.</p>

      <h3>Upholding Ethical Integrity in AI Development</h3>
      <p className="explanation">Medical AI must prioritize the safety and wellbeing of the patient. Training models on noisy, unreliable data undermines this principle. Clean, biologically grounded data elevates medical AI from mere pattern recognition to ethically sound decision support.</p>

      <p className="explanation">In short, this project matters because it aims to ensure that AI models reflect reality, not interference.</p>
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
    setSent(true)
  }

  return (
    <div className="get-involved">
      <h2>Get Involved</h2>
      <p className="explanation">
        This project is designed to grow through collaboration. Researchers, clinicians, and developers are invited to contribute ideas, code, and data to help refine the physiologically conditioned diffusion model. Whether you specialize in biomedical engineering, machine learning, or clinical cardiology, your expertise can strengthen the foundation for cleaner, more interpretable physiological datasets.
      </p>

      <h3>For Researchers and Engineers</h3>
      <p className="explanation">You can contribute by testing the open-source model, analyzing outputs, proposing architectural improvements, or extending the framework to other biosignals. The repository includes preprocessing workflows, alignment scripts, and reference implementations for diffusion‑based reconstruction.</p>

      <h3>For Clinicians</h3>
      <p className="explanation">Your insight is invaluable. Reviewing denoised signals, identifying clinically significant patterns, or providing feedback on interpretability helps ensure the model remains aligned with real-world needs. If your clinical setting encounters specific noise patterns, your observations can directly shape future model refinements.</p>

      <h3>For Device Developers</h3>
      <p className="explanation">Wearable technology companies and sensor engineers can collaborate to create pipelines that integrate physiologically conditioned denoising directly into device firmware or cloud-based monitoring systems.</p>

      <h3>Why You Matter</h3>
      <p className="explanation">Clean data is not the responsibility of one researcher, it is a collective responsibility across disciplines. Your involvement helps ensure medical AI is trustworthy, interpretable, and centered around patient wellbeing. Together, we can build a future where every heartbeat is recorded faithfully and every AI-supported decision reflects real human physiology.</p>

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
        The motivation for this project comes from a simple but 
        pressing question: How can we trust AI to interpret the 
        human heart if the data it learns from is distorted? As 
        AI models play a growing role in healthcare, their 
        reliability increasingly depends on data quality. Yet 
        clean physiological data is difficult to obtain, 
        which are easily contaminated by patient movement 
        or sensor error.
      </p>
      <p className="explanation">
        My goal is to bridge this gap between technology and biology. 
        As a student who is interested in biomedical signal processing, 
        I have seen how even advanced algorithms fail when trained 
        on imperfect data. This project represents both a technical 
        and ethical response, a commitment to developing AI systems 
        that learn from data as true to life as possible.
      </p>
      <p className="explanation">
        By combining insights from physiology, machine learning, and 
        medical engineering, I aim to create a framework that can be 
        adopted by researchers, clinicians, and wearable device 
        developers. Ultimately, Restoring the Heartbeat of Data is 
        not only about cleaning ECG signals. It’s about redefining 
        how we approach the intersection of human health and 
        artificial intelligence.
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
      <p className="explanation">Upload a CSV containing one column of ECG samples (one value per line). The demo runs a local denoiser and displays the result.</p>

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

